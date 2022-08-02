import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Graph} from "../../entities/Graph";
import {GraphInvariant, GraphInvariantCollection} from "../../entities/GraphInvariant";
import InvariantTable from "../../components/invariant_table/InvariantTable";
import {Invariant} from "../../entities/Invariant";
import {FullInvariant} from "../../entities/FullInvariant";
import {followLink} from "../../util/followLinks";
import AdjacencyMatrix from "../../components/adjancency_matrix/AdjacencyMatrix";
import {User} from "../../entities/User";
import AdjacencyList from "../../components/adjacency_list/AdjacencyList";
import styles from "./GraphDetail.module.css";
import {AddEmbeddingRequest, Embedding} from "../../entities/Embedding";
import {Node, Visualization, VisualizationType} from "../../entities/GraphVisualization";
import {prepareForVisualization, scaleBack} from "../../components/drawing_tool/graph_visualizer/GraphVisualizerUtil";
import GraphVisualizer from "../../components/drawing_tool/graph_visualizer/GraphVisualizer";
import ExpandModal from "../../components/drawing_tool/expand_modal/ExpandModal";
import api from "../../services/Api";
import CommentSection from "../../components/comments/comment_section/CommentSection";
import {MessageResponse} from "../../entities/MessageResponse";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import {useAppSelector} from "../../app/Hooks";
import {selectCurrentUser, selectIsAdmin, selectLoggedIn} from "../../features/current_user/CurrentUserSlice";
import ConfirmationModal from "../../components/confirmation_modal/ConfirmationModal";
import LoadingSpinner from "../../components/loading_spinner/LoadingSpinner";
import DownloadBox from "../../components/download_box/DownloadBox";
import {FaUser} from "react-icons/all";
import {FaTrashAlt} from "react-icons/fa";
import {toast} from "react-toastify";

interface EmbeddingState {
  embeddings: Embedding[],
  visualizations: Visualization[],
  current: number
}

const GraphDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentUser: User|undefined = useAppSelector(selectCurrentUser);
  const isAdmin: boolean = useAppSelector(selectIsAdmin);
  const isLoggedIn: boolean = useAppSelector(selectLoggedIn);
  const [loading, setLoading] = useState<boolean>(true);
  const [graph, setGraph] = useState<Graph>();
  const [graphOwner, setGraphOwner] = useState<User>();
  const [graphInvariants, setGraphInvariants] = useState<FullInvariant[]>([]);
  const [sortedInvariants, setSortedInvariants] = useState<FullInvariant[]>([]);
  const [embeddings, setEmbeddings] = useState<EmbeddingState>({
    embeddings: [],
    visualizations: [],
    current: 0
  })

  useEffect(() => {
    if(id){
      api.get<Graph>(`graphs/${id}`)
        .then((response: any) => {
          setGraph(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
          navigate("/notfound");
        });
    }
  }, [id]);

  useEffect(() => {
    if(graph){
      getGraphOwner(graph._links?.graphOwner.href);
      getGraphInvariants(graph._links?.graphInvariants.href);
      getEmbeddings(graph._links?.embeddings.href, 0);
    }
  }, [graph]);

  useEffect(() => {
    setSortedInvariants(
      [...graphInvariants].sort((a, b) => {
      return (a.invariantName > b.invariantName) ? 1 : ((a.invariantName < b.invariantName) ? -1 : 0)})
    )
  }, [graphInvariants]);

  useEffect(() => {
    setLoading(false);
  }, [sortedInvariants])

  const updateVisualizations = (embeddings: Embedding[]): Visualization[] => {
    if(embeddings.length > 0 && graph){
      let visualizations: Visualization[] = embeddings.map(e => prepareForVisualization(graph.adjacencyList, e.entity.embedding))
      return visualizations.map(v => ({nodes: v.nodes, edges: v.edges}));
    }
    return [];
  }

  const getGraphInvariants = (graphInvariants: string | undefined) => {
    if(graphInvariants) {
      let invariants: FullInvariant[] = [];
      api.get<GraphInvariantCollection>(followLink(graphInvariants))
        .then((r: any) => {
          let graphInvariants: GraphInvariant[] = r.data._embedded.graphInvariantModelList;
          graphInvariants.forEach((gi: GraphInvariant) => {
            let associatedInvariant = gi._links?.associatedInvariant.href;
            if (associatedInvariant) {
              api.get<Invariant>(followLink(associatedInvariant))
                .then((response: any) => {
                  invariants.push({...gi.entity, ...response.data.entity});
                  if(invariants.length === graphInvariants.length){
                    setGraphInvariants(invariants)
                  }
                })
                .catch((e: Error) => {
                  console.log(e);
                });
            }
          });
        })
        .catch((e: Error) => {
          console.log(e);
        })
    }
  }

  const getGraphOwner = (graphOwner: string | undefined) => {
    if(graphOwner) {
      api.get<User>(followLink(graphOwner))
        .then((r: any) => {
          setGraphOwner(r.data);
        })
        .catch((e: Error) => {
          console.log(e);
        })
    }
  }

  const getEmbeddings = (embeddings: string | undefined, showEmbedding: number) => {
    if(embeddings){
      api.get<Embedding>(followLink(embeddings))
        .then((r: any) => {
          setEmbeddings({
            embeddings: r.data._embedded.embeddingModelList,
            visualizations: updateVisualizations(r.data._embedded.embeddingModelList),
            current: showEmbedding
          })
        })
        .catch((e: Error) => {
          console.log(e);
        })
    }
  }

  const saveEmbedding = (nodes: Node[]) => {
    if(graph){
      let newEmbedding: AddEmbeddingRequest = {
        graphId: graph.entity.graphId,
        embedding: nodes.sort((a, b) => a.id < b.id ? -1 : (a.id > b.id ? 1 : 0))
          .map(n => [n.x, n.y])
      }
      try {
        api.post<MessageResponse>("embeddings", newEmbedding)
          .then(response => {
            if(response.data.success){
              getEmbeddings(graph._links?.embeddings.href, embeddings.embeddings.length);
            }
          });
      } catch(error) {
        console.log(error)
      }
    }
  }

  const handleRemoveEmbedding = () => {
    try {
      api.post<MessageResponse>("remove_embedding", embeddings.embeddings[embeddings.current].entity.embeddingId)
        .then((response: any) => {
          if(response.data.success){
            getEmbeddings(graph?._links?.embeddings.href, 0);
          }
        })
        .catch((e: Error) => {
          console.log(e);
        })
    } catch(error) {
      console.log(error)
    }
  }

  const handleRemoveGraph = () => {
    if(graph){
      try {
        api.post<MessageResponse>("graphs/remove_graph", graph.entity.graphId)
          .then((response: any) => {
            if(response.data.success){
              navigate("/");
              toast.success("Graph successfully removed!");
            } else {
              toast.error("Failed to remove graph!");
            }
          })
          .catch((e: Error) => {
            toast.error("Failed to remove graph!");
            console.log(e);
          })
      } catch(error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      { (!loading && graph && embeddings.visualizations) ? ( <>
      {embeddings.visualizations && (
        embeddings.visualizations.map((v, i) =>
        (<div className={"modal fade"} id={"expandVisualizeModal-" + i} aria-hidden={"true"}>
          <ExpandModal visualizationData={embeddings.visualizations[i]} saveEmbedding={saveEmbedding} canSave={isAdmin || (isLoggedIn && currentUser?.entity.userId === graph.entity.userId)}/>
        </div> )))}
      <h1>Graph {graph.entity.graphId}</h1>
        <div className={`${styles.header}`}>
          <div>
            { graph.entity.graphName && (<p className={"text-muted"} style={{marginBottom: "2px"}}><b>Name: </b> {graph.entity.graphName}</p>) }
            { graphOwner && <p className={"text-muted"} style={{alignItems: "center", display: "inline-flex", marginBottom: "0"}}><FaUser style={{fontSize: "12px", marginRight: "5px"}}/> Submitted by {graphOwner.fullname} </p> }
          </div>
          { ((currentUser && currentUser.entity.userId === graph.entity.userId) || isAdmin)  &&
            <button className={"btn btn-danger"} style={{marginLeft: "auto", marginTop: "auto", height: "fit-content"}}
                   data-bs-toggle={"modal"} data-bs-target={"#deleteGraphModal"}>
            <FaTrashAlt style={{marginRight: "5px"}}/> Delete graph</button>
          }
        </div>
      <div className={`${styles.adjacency}`}>
        <div>
          <Carousel showArrows={true} width={300} showThumbs={false} selectedItem={embeddings.current} onChange={index => setEmbeddings({
            ...embeddings,
            current: index
          })}>
            { embeddings.embeddings.map((e, i) =>
                <GraphVisualizer propNodes={embeddings.visualizations[i].nodes} propLinks={embeddings.visualizations[i].edges}
                                 type={VisualizationType.Static} size={300}/>
            )}
          </Carousel>
          <div className={`${styles.expandVisual}`}>
            { embeddings.embeddings.length > 1 && (isAdmin || (isLoggedIn && currentUser?.entity.userId === graph.entity.userId)) &&
              <button type={"button"} className={"btn btn-primary"} data-bs-toggle={"modal"} data-bs-target={"#deleteEmbeddingModal"}>
              Remove embedding
            </button>}
            <button type={"button"} className={"btn btn-primary"} data-bs-toggle={"modal"} data-bs-target={"#expandVisualizeModal-" + embeddings.current}>
              Edit embedding
            </button>
          </div>
        </div>
        <AdjacencyMatrix adj={graph.adjacencyMatrix}/>
        <AdjacencyList adj={graph.adjacencyList}/>
        {id && <DownloadBox graphId={parseInt(id)}/>}
      </div>
      <br />
      <br />
      <h3>Invariants</h3>
      <div className="row">
        <div className="col-md-6">
          <InvariantTable graphInvariants={sortedInvariants.slice(0, Math.ceil(sortedInvariants.length / 2))}/>
        </div>
        <div className="col-md-6">
          <InvariantTable graphInvariants={sortedInvariants.slice(Math.ceil(sortedInvariants.length / 2))}/>
        </div>
      </div>
      <h3>Comments</h3>
      <CommentSection commentLink={graph._links?.graphComments.href} graphId={graph.entity.graphId}/>
      <div className={"modal fade"} id={"deleteEmbeddingModal"} aria-hidden={"true"}>
        <ConfirmationModal
          body={<p>Are you sure you want to delete this embedding? The embedding will no longer be publicly visible. This action can't be undone.</p>}
          title={"Remove embedding"}
          confirmText={"Remove embedding"}
          onConfirm={handleRemoveEmbedding}
          id={"deleteEmbeddingModal"}
          disabledConfirm={false}
        />
      </div>
        <div className={"modal fade"} id={"deleteGraphModal"} aria-hidden={"true"}>
          <ConfirmationModal
            body={<p>Are you sure you want to delete this graph? The graph will no longer be publicly visible. This action can't be undone.</p>}
            title={"Remove graph"}
            confirmText={"Remove graph"}
            onConfirm={handleRemoveGraph}
            id={"deleteGraphModal"}
            disabledConfirm={false}
          />
        </div>
    </>)
        :
        <LoadingSpinner/>
      }
    </div>
  );
}

export default GraphDetail;