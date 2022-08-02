import styles from "./AdjacencyMatrix.module.css";

interface Props {
  adj: boolean[][]
}

const AdjacencyMatrix = ({adj}:Props) => {
  const n = adj.length;

  return (
    <div className={`${styles.adj}`}>
      <h6><b>Adjacency Matrix</b></h6>
      <div className={"card"} style={{display: "inline-block"}}>
        <div className={"card-body"}>
          {adj.slice(0, 10).map((row, i) => (
            <div key={i}>
              {row.slice(0, 10).map((col, j) => (
                <span key={j}>{col? 1 : 0}</span>
              ))}
              {n > 10 && <span key={10}>...</span>}
            </div>
          ))}
          {n > 10 && <span key={10}>...</span>}
        </div>
      </div>
    </div>
  )
}

export default AdjacencyMatrix;