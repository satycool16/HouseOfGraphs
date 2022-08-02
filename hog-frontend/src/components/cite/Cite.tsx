import {MdContentCopy} from "react-icons/md";
import React from "react";

const Cite = () => {
  const citeText: string = "G. Brinkmann, K. Coolsaet, J. Goedgebeur, H. Mélot, House of Graphs: a database of interesting graphs, Discrete Applied Mathematics, 161(1-2):311-314, 2013. Available at http://hog.grinvin.org";

  return (
    <div className={"input-group"}>
      <textarea className={"form-control"} disabled style={{resize: "none"}} value={citeText}/>
      <button className={"input-group-text btn btn-primary"} onClick={() => {navigator.clipboard.writeText(citeText)}}>
        <MdContentCopy/>
      </button>
    </div>
  )
}

export default Cite;