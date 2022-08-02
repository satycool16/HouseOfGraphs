import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {SearchConditions} from "../../entities/Enquiries";
import ActiveFilterList from "../../components/active_filters/active_filter_list/ActiveFilterList";
import api from "../../services/Api";
import {Invariant, InvariantCollection} from "../../entities/Invariant";
import {format} from "date-fns";
import {FiClock} from "react-icons/fi";

const SearchHistory = () => {
  const navigate = useNavigate();
  const searches = sessionStorage.getItem("search_history");
  const [invariants, setInvariants] = useState<Invariant[]>([])

  useEffect(() => {
    api.get<InvariantCollection>("invariants/")
      .then((response: any) => {
        setInvariants(response.data._embedded.invariantModelList);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  return (
    searches && invariants.length > 0 ?
    <div>
      <h3>Search History</h3>
      <p>Previous searches and their criteria are listed here. Click on one of the searches to see its results.</p>
      {JSON.parse(searches).reverse().map((search: {s: SearchConditions, t: Date}, i: number) => (
        <div className={"card"} style={{marginBottom: "10px", cursor: "pointer", padding: "5px 10px"}}
          onClick={_ => navigate("/result-graphs", {state: {conds: search.s}})}>
          <h6 style={{marginBottom: "0", color: "#0d6efd", textDecoration: "underline"}}>Search #{JSON.parse(searches).length - i}</h6>
          <p className={"card-text"} style={{marginBottom: "8px"}}>
            <small className={"text-muted"} style={{alignItems: "center", display: "inline-flex"}}>
              <FiClock style={{marginRight: "5px", textAlign: "center"}}/>{format(new Date(search.t), "d LLLL y - HH:mm:ss")}
            </small>
          </p>
          <p style={{marginBottom: "0"}}>Search criteria:</p>
          <ActiveFilterList conds={search.s} invariants={invariants} removeFilter={undefined}/>
        </div>
      ))}
    </div>
    :
    <div>
      <h3>Search History</h3>
      <p>You haven't performed any searches yet.</p>
      <button className={"btn btn-primary"} onClick={_ => navigate("/search")}>Search graphs</button>
    </div>
  );
}

export default SearchHistory;