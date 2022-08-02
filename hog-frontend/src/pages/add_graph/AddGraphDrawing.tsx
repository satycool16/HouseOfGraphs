import {Node, VisualizationType} from "../../entities/GraphVisualization";
import GraphVisualizer from "../../components/drawing_tool/graph_visualizer/GraphVisualizer";
import React from "react";
import {useNavigate} from "react-router-dom";
import api from "../../services/Api";
import {MessageResponse} from "../../entities/MessageResponse";

const AddGraphDrawing = () => {
  const navigate = useNavigate();

  const addGraph = (nodes: Node[], adj: boolean[][] ) => {
    try {
      api.post<MessageResponse>("check_graph", adj)
        .then(response => {
          console.log(response.data);
          if(response.data.success){
            navigate("/add_graph_details", {state: {nodes: nodes, adj: adj}});
          } else {
            navigate("/graphs/" + response.data.message);
          }
        });
    } catch(error) {
      console.log(error)
    }

  }

  return (
    <GraphVisualizer propNodes={[]} propLinks={[]} type={VisualizationType.Editable} size={800} addGraph={addGraph} newGraph={true}/>
  );
}

export default AddGraphDrawing;