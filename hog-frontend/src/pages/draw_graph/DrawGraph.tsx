import React from "react";
import {VisualizationType} from "../../entities/GraphVisualization";
import GraphVisualizer from "../../components/drawing_tool/graph_visualizer/GraphVisualizer";
import {DrawingEnquiry, SearchConditions} from "../../entities/Enquiries";
import {useNavigate} from "react-router-dom";
import api from "../../services/Api";

const DrawGraph = () => {
  let navigate = useNavigate();
  let conds: SearchConditions = {
    invariantEnquiries: [],
    invariantRangeEnquiries: [],
    interestingInvariantEnquiries: [],
    graphClassEnquiries: [],
    graphIdEnquiry: undefined,
    canonicalFormEnquiry: undefined,
    textEnquiries: []
  }

  const getCanonical = (denq: DrawingEnquiry) => {
    try {
      api.post("enquiry/drawing", denq)
        .then(response => {
        doSearch(response.data);
      });
    } catch(error) {
      console.log(error)
    }
  }

  const doSearch = (canonical: string) => {
    console.log("called")
    conds.canonicalFormEnquiry = {canonicalForm: canonical};
    try {
      api.post("enquiry", conds)
        .then(response => {
        console.log(response);
        if(response.data._embedded){
          navigate("/result-graphs", {state: {res: response.data._embedded.graphSearchModelList, conds: conds}});
        } else {
          navigate("/result-graphs", {state: {res: [], conds: conds}});
        }
      });
    } catch(error) {
      console.log(error)
    }
  }


  return (
    <GraphVisualizer propNodes={[]} propLinks={[]} type={VisualizationType.Editable} size={800} onSearch={getCanonical}
    newGraph={false}/>
  )
}

export default DrawGraph;