import React, {useEffect, useState} from "react";
import api from "../../services/Api";
import {Invariant, InvariantCollection} from "../../entities/Invariant";
import {Node} from "../../entities/GraphVisualization";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../app/Hooks";
import {selectCurrentUser, selectLoggedIn} from "../../features/current_user/CurrentUserSlice";
import {AddGraphRequest} from "../../entities/Graph";
import {MessageResponse} from "../../entities/MessageResponse";

interface Props {
  fromFile?: boolean,
  handleAdd?: (graphName: string, graphInfo: string, interestingInvariants: number[]) => void,
  uploadError?: string
}

const AddGraphDetails = ({fromFile, handleAdd, uploadError}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {nodes: Node[], adj: boolean[][]};
  const isLoggedIn = useAppSelector(selectLoggedIn);
  const currentUser = useAppSelector(selectCurrentUser);
  const [invariants, setInvariants] = useState<Invariant[]>([]);
  const [graphName, setGraphName] = useState<string>("");
  const [graphInfo, setGraphInfo] = useState<string>("");
  const [showEmptyError, setShowEmptyError] = useState<boolean>(false);
  const [interestingInvariants, setInterestingInvariants] = useState<number[]>([]);
  const nrColumns = 4

  useEffect(() => {
    api.get<InvariantCollection>("invariants/")
      .then((response: any) => {
        setInvariants(response.data._embedded.invariantModelList
          .sort((a: Invariant, b: Invariant) => a.entity.invariantName.localeCompare(b.entity.invariantName)));
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  const handleGraphInfoChange = (event: any) => {
    setShowEmptyError(event.target.value.trim() === "");
    setGraphInfo(event.target.value);
  }

  const handleCheck = (invariantId: number) => {
    if(interestingInvariants.includes(invariantId)){
      let filtered = interestingInvariants.filter(x => x !== invariantId)
      setInterestingInvariants(filtered)
    } else {
      setInterestingInvariants([...interestingInvariants, invariantId])
    }
  }

  const addGraph = () => {
    if(graphInfo.trim() === ""){
      setShowEmptyError(true);
      return;
    }

    if(fromFile && handleAdd){
      handleAdd(graphName, graphInfo, interestingInvariants);
      return;
    }

    if(isLoggedIn && currentUser && state.nodes !== undefined && state.adj !== undefined){
      let newGraph: AddGraphRequest = {
        graphName: graphName,
        graphInfo: graphInfo,
        userId: currentUser.entity.userId,
        embedding: state.nodes.map(n => [n.x, n.y]),
        interestingInvariants: interestingInvariants,
        adjacencyMatrix: state.adj
      }
      try {
        api.post<MessageResponse>("graphs_drawing", newGraph)
          .then(response => {
            if(response.data.success){
              console.log(response.data);
              navigate("/graphs/" + response.data.message)
            }
          });
      } catch(error) {
        console.log(error)
      }
    }
  }

  return (
    (state && state.nodes !== undefined && state.adj !== undefined) || fromFile ?
    <div>
      <h4>Graph name</h4>
      <p>If the graph has a specific name, please enter it below. This field is optional.</p>
      <input className={"form-control"} placeholder={"Graph name"} onChange={e => setGraphName(e.target.value)} style={{width: "500px"}}/>
      <br/>
      <h4>Graph info</h4>
      <p>Please give some more information about this graph. Where did you find this graph? What does this graph represent?
      What makes this graph special? By adding keywords, other users can easily find this graph.</p>
      <textarea className={"form-control"} placeholder={"Write description..."} rows={3} onChange={handleGraphInfoChange}
                style={{width: "500px"}}/>
      {showEmptyError && <p style={{color: "red"}}>Graph info can't be empty</p>}
      <br/>
      <h4>Interesting invariants</h4>
      <p>Please indicate for which invariants this graph is interesting according to you. The definitions of the invariants can
        be found <a href={"/help#invariants"} target={"_blank"} rel={"noreferrer noopener"}>here</a>.</p>
      {invariants.length > 0 &&
          <div className={"container"}>
            {Array.from(Array(Math.ceil(invariants.length / nrColumns)).keys()).map(r => (
              <div className={"row"} key={"row-" + r}>
                {Array.from(Array(nrColumns).keys()).map(c => {
                    return (
                      <div className={"col"} key={"col-" + c}>
                        <div className={"form-check"}>
                          <input className={"form-check-input"} type={"checkbox"} id={"check-" + invariants[r * nrColumns + c].entity.invariantName}
                            onClick={_ => handleCheck(invariants[r * nrColumns + c].entity.invariantId)}/>
                          <label className={"form-check-label"} htmlFor={"check-" + invariants[r * nrColumns + c].entity.invariantName}>
                            {invariants[r * nrColumns + c].entity.invariantName}
                          </label>
                        </div>
                      </div>)
                  }
                )}
              </div>
            ))}
          </div>
      }
      <br/>
      {uploadError !== "" && <p style={{color: "red"}}>{uploadError}</p>}
      <button type={"button"} className={"btn btn-primary"} onClick={addGraph}>Add graph</button>
    </div>
    :
    <div>
      <p>You need to draw or upload a graph before you can add the details of the graph.</p>
    </div>
  );
}

export default AddGraphDetails;