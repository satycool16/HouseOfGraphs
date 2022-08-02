interface Props {
  adj: number[][]
}

const AdjacencyList = ({adj}:Props) => {
  const n = adj.length;

  return (
    <div>
      <h6><b>Adjacency List</b></h6>
      <div className={"card"} style={{display: "inline-block"}}>
        <div className={"card-body"}>
          {adj.slice(0, 10).map((neighbours, i) => (
            <div key={i}>
              {i + 1 + ": " + neighbours.slice(0, 10).map(n => n + 1).join(" ") + ((neighbours.length > 10) ? "..." : "")}
            </div>
          ))}
          {n > 10 && <span key={10}>...</span>}
        </div>
      </div>
    </div>
  )
}

export default AdjacencyList;