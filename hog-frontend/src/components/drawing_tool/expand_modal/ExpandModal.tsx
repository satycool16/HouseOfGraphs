import React, {useEffect, useState} from "react";
import {Node, Visualization, VisualizationType} from "../../../entities/GraphVisualization";
import GraphVisualizer from "../graph_visualizer/GraphVisualizer";
import styles from './ExpandModal.module.css';


interface Props {
  visualizationData: Visualization,
  saveEmbedding: (nodes: Node[]) => void,
  canSave: boolean
}

const ExpandModal = ({visualizationData, saveEmbedding, canSave}: Props) => {
  return (
  <div className={"modal-dialog modal-fullscreen"}>
    <div className={"modal-content"}>
      <div className={"modal-header"}>
        Edit graph embedding
        <button type={"button"} className={"btn-close"} data-bs-dismiss={"modal"} aria-label={"Close"}/>
      </div>
      <div className={"modal-body"}>
        <div className={`${styles.center}`}>
          <GraphVisualizer propNodes={visualizationData.nodes} propLinks={visualizationData.edges}
                           type={VisualizationType.Draggable} size={800} saveEmbedding={saveEmbedding} canSave={canSave}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ExpandModal;