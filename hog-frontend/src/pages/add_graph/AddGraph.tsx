import styles from "./AddGraph.module.css";
import {useNavigate} from "react-router-dom";

const AddGraph = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.menu}`}>
      <div className={`${styles.menu_item}`} onClick={_ => navigate("/add_graph_drawing")}>
        <img src={"hog.png"} alt={"draw-graph"}/>
        <h5 className={`${styles.menu_name}`}>Draw a graph</h5>
      </div>
      <div className={`${styles.menu_item}`} onClick={_ => navigate("/add_graph_file")}>
        <img src={"hog.png"} alt={"draw-graph"}/>
        <h5 className={`${styles.menu_name}`}>Upload a file</h5>
      </div>
    </div>
  );
}

export default AddGraph;