import React, {useState} from "react";
import {Graph} from "../../../entities/Graph";
import {Link} from "react-router-dom";

interface Props {
  graphs: Graph[]
}

const GraphSearchResults = ({graphs}:Props) => {

  return (
    <div>
      <p>{graphs.length} graphs found</p>
      <ul>
        {graphs.map(g => (
          <li key={g.entity.graphId}>
            <Link to={`/graphs/${g.entity.graphId}`}>
              {g.entity.graphId} {g.entity.graphName && '(' + g.entity.graphName + ')'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GraphSearchResults;