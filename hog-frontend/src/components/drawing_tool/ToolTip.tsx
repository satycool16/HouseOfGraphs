import {VisualizationType as vt} from "../../entities/GraphVisualization";
import styles from "./ToolTip.module.css";

interface Props {
  type: vt
}

const ToolTip = ({type}: Props) => {
  return (
    <div className={`${styles.info}`}>
      { type === vt.Editable &&
      <div>
        <h5>Create node</h5>
        <p>Click on empty space not too close to existing nodes to add a new node.</p>
      </div>}
      <div>
        <h5>Move node</h5>
        <p>Nodes are draggable. The node that is being dragged is colored blue.</p>
      </div>
      {type === vt.Editable &&
        <div>
        <h5>Remove node</h5>
        <p>To remove nodes, toggle the remove nodes checkbox. Click on a node to remove it. The corresponding node will
          be colored
          red.</p>
      </div>}
      {type === vt.Editable &&
        <div>
        <h5>Add edge</h5>
        <p>Click on the first node. The source node will be colored green. Click on another node (different than the
          selected one)
          to create an edge between them.</p>
      </div>}
      {type === vt.Editable &&
        <div>
        <h5>Remove edge</h5>
        <p>Click on the first node. The source vertex will be colored green. Click on a neighboring node to remove the
          edge
          between them. The edge that will be removed is highlighted in red.</p>
      </div>}
      <div>
        <h5>Zooming</h5>
        <p>Zooming in or out on the image can be done by scrolling. When zoomed in, drag the background to move around in the image.</p>
      </div>
      <div>
        <h5>Toggle live</h5>
        <p>When the graph is live, an automatic force will be applied to the edges and the nodes of the graph will be repositioned
          accordingly. All actions can still be performed when the graph is live. The length of the edges can be changed by using
          the edge length slider.</p>
      </div>
    </div>
  );
}

export default ToolTip;