import Select from "react-select";
import React, {useEffect, useState} from "react";
import styles from "./AddGraphFile.module.css";
import api from "../../services/Api";
import {MessageResponse} from "../../entities/MessageResponse";
import {useNavigate} from "react-router-dom";
import AddGraphDetails from "./AddGraphDetails";
import {useAppSelector} from "../../app/Hooks";
import {selectCurrentUser, selectLoggedIn} from "../../features/current_user/CurrentUserSlice";
import {AddGraphFileRequest} from "../../entities/Graph";
import {Format} from "../../entities/Format";

const AddGraphFile = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectLoggedIn);
  const currentUser = useAppSelector(selectCurrentUser);
  const [selectedFile, setSelectedFile] = useState<File|null>(null);
  const [fileError, setFileError] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string>("");
  const [selectedFormat,setSelectedFormat] = useState<string>("");
  const [formatOptions, setFormatOptions] = useState<{ label: string, value: string }[]>([]);

  useEffect(() => {
    api.get<Format[]>("graph_input_formats/")
      .then((response: any) => {
        setFormatOptions(response.data.map((f: Format) => ({label: f.name, value: f.extension})));
        setSelectedFormat(response.data.filter((f: Format) => f.extension === "g6")[0].name);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, [])

  const addGraph = (graphName: string, graphInfo: string, interestingInvariants: number[]) => {
    if(selectedFile === null){
      setFileError(true);
      return;
    }

    if(isLoggedIn && currentUser){
      let formData = new FormData();
      let newGraph: AddGraphFileRequest = {
        graphName: graphName,
        graphInfo: graphInfo,
        userId: currentUser.entity.userId,
        interestingInvariants: interestingInvariants,
        fileFormat: selectedFormat
      }
      formData.append("file", selectedFile);
      formData.append("addGraphRequest", new Blob([JSON.stringify(newGraph)], {type: 'application/json'}))
      try {
        api.post<MessageResponse>("graphs_file", formData)
          .then(response => {
            if(response.data.success){
              navigate("/graphs/" + response.data.message);
            } else {
              if(response.data.message.startsWith("Graph already exists:")){
                navigate("/graphs/" + response.data.message.substring(response.data.message.indexOf(':') + 1));
              } else {
                setUploadError(response.data.message);
              }
            }
          });
      } catch(error) {
        console.log(error)
      }
    }
  }

  const handleUpload = (event: any) => {
    setSelectedFile(event.target.files[0] || null)
    setFileError(!event.target.files[0]);
  }

  const handleFormatChange = (format: any) => {
    setSelectedFormat(format.label)
  }

  return (
    <div>
      <h3>Add graph from file</h3>
      <h4>Graph file</h4>
      <p>Upload a file with a graph in the following <a href={"/help#formats"}>format</a>:</p>
      <div className={`${styles.upload_btn_group}`}>
        {formatOptions.length > 0 &&
        <Select
          defaultValue={formatOptions.filter(f => f.value === "g6")[0] || undefined}
          options={formatOptions}
          isDisabled={formatOptions.length <= 1}
          onChange={handleFormatChange}
        />}
        <input className={"form-control"} type={"file"} onChange={handleUpload} style={{maxWidth: "500px"}}/>
      </div>
      {fileError && <p className={`${styles.error}`}>A file must be selected</p>}
      <div className={`${styles.notes}`}>
        <p>Notes</p>
        <ul>
          <li>If the file would contain multiple graphs, only the first graph is read. If you would like to upload a list of graphs,
            please <a href={"/help/#contact"}>contact</a> us.
          </li>
          <li>Only graphs with at most 250 vertices are supported.</li>
        </ul>
      </div>
      <AddGraphDetails fromFile={true} handleAdd={addGraph} uploadError={uploadError}/>
    </div>
  );
}

export default AddGraphFile;