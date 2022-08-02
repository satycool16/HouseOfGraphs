import React, {useEffect, useState} from "react";
import api from "../../services/Api";
import {Format} from "../../entities/Format";
import Select from "react-select";
import {DownloadGraphRequest} from "../../entities/Graph";
import {SearchConditions} from "../../entities/Enquiries";
import LoadingSpinner from "../loading_spinner/LoadingSpinner";

interface Props {
  graphId: number,
  searchConditions?: SearchConditions
  nrOfResults?: number
}

const DownloadBox = ({graphId, searchConditions, nrOfResults}: Props) => {
  const [formatOptions, setFormatOptions] = useState<{label: string, value: string}[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<string>("");
  const [maxDownload, setMaxDownload] = useState<number>(-1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    api.get<Format[]>("graph_output_formats/")
      .then((response: any) => {
        setFormatOptions(response.data.map((f: Format) => ({label: f.name, value: f.extension})));
        setSelectedFormat(response.data.filter((f: Format) => f.extension === "mat")[0].name);
        getMaxDownloadNumber();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, [])

  const getMaxDownloadNumber = () => {
    api.get<number>("max_download/")
      .then((response: any) => {
        setMaxDownload(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  const downloadGraph = () => {
    let downloadRequest: DownloadGraphRequest = {
      graphId: graphId,
      format: selectedFormat,
      searchConditions: searchConditions || null
    }
    setLoading(true);
    try {
      api.post("download_graph", downloadRequest)
        .then(response => {
          let blob = new Blob([response.data])
          const link = document.createElement('a');
          const url = URL.createObjectURL(blob);
          console.log(url);
          link.href = url;
          let option = formatOptions.find(f => f.label === selectedFormat);
          let extension = option ? option.value : "txt";
          if(graphId === -1 && nrOfResults){
            link.download = 'list_' + (nrOfResults < maxDownload ? nrOfResults : maxDownload) + '_graphs.' + extension;
          } else {
            link.download = 'graph_' + graphId + '.' + extension;
          }
          link.click();
          setLoading(false);
        });
    } catch(error) {
      console.log(error)
    }
  }

  const handleFormatChange = (format: any) => {
    setSelectedFormat(format.label);
  }

  return (
    <div className={"card"} style={{marginLeft: "auto", padding: "10px", height: "fit-content", maxWidth: "300px"}}>
      {graphId !== -1 ?
        <p>Download this graph in the selected format:</p>
      :
        nrOfResults && nrOfResults <= maxDownload ?
          <p>Download these {nrOfResults} graphs in the selected format:</p>
          :
          <p>Download the first {maxDownload} graphs in the selected format:</p>
      }
      <div style={{display: "flex", flexDirection: "row", columnGap: "10px"}}>
        {formatOptions.length > 0 &&
            <Select
                defaultValue={formatOptions.filter(f => f.value === "mat")[0] || undefined}
                options={formatOptions}
                onChange={handleFormatChange}
            />}
        {loading ?
          <div style={{marginRight: "10px"}}><LoadingSpinner/></div>
          :
          <button className={"btn btn-primary"} onClick={downloadGraph}>Download</button>
        }
      </div>
      <br/>
      <p>See also: <a href={"/help#formats"}>supported formats</a></p>
    </div>
  );
}

export default DownloadBox;