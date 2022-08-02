import {SearchConditions} from "../../entities/Enquiries";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ActiveFilterBox from "../../components/active_filters/active_filter_list/ActiveFilterBox";
import {Invariant, InvariantCollection} from "../../entities/Invariant";
import GraphTable from "../../components/graph_table/GraphTable";
import api from "../../services/Api";
import {GraphSearch} from "../../entities/GraphSearch";
import DownloadBox from "../../components/download_box/DownloadBox";

const GraphResultsPage = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {conds: SearchConditions};
  const [loading, setLoading] = useState<boolean>(true);
  const [conditions, setConditions] = useState<SearchConditions>(state.conds);
  const [invariants, setInvariants] = useState<Invariant[]>([]);
  const [graphs, setGraphs] = useState<GraphSearch[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const savedPageSize = localStorage.getItem("pageSize");
  const [size, setSize] = useState<number>(savedPageSize !== null ? parseInt(savedPageSize) : 15);
  const [totalElements, setTotalElements] = useState<number>();

  useEffect(() => {
    api.get<InvariantCollection>("invariants/")
      .then((response: any) => {
        setInvariants(response.data._embedded.invariantModelList);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  const editConditions = () => {
    navigate("/search", {state: {conds: conditions}})
  }

  const updateConditions = (conds: SearchConditions) => {
    setConditions(conds);
  }

  /*const updateVisibleColumns = () => {

  }*/

  useEffect(() => {
    setLoading(true);
    try {
      api.post("enquiry", conditions, {params: {page: currentPage - 1, size: size}})
        .then(response => {
          let searchData = response.data._embedded ? response.data._embedded?.graphSearchModelList : [];
          if(response.data.page.totalElements !== undefined){setTotalElements(response.data.page.totalElements)}
          setGraphs(searchData);
          setLoading(false);
        });
    } catch(error) {
      console.log(error)
    }
  }, [conditions, currentPage, size]);

  const updatePage = (page: number) => {
    setCurrentPage(page);
  }
  // TODO - change page size on last page ...
  const updateSize = (size: number) => {
    setSize(size);
    localStorage.setItem("pageSize", String(size));
  }

  return (
    <>
      <div style={{display: "flex", flexDirection: "row", columnGap: "20px"}}>
        <div style={{flexGrow: 1}}>
          <ActiveFilterBox conds={conditions} invariants={invariants} updateConditions={updateConditions} editConditions={editConditions}/>
        </div>
        <DownloadBox graphId={-1} searchConditions={conditions} nrOfResults={totalElements}/>
      </div>
      <br/>
      {graphs !== undefined && totalElements !== undefined && !loading ?
          <GraphTable invariants={invariants} graphs={graphs} updatePage={updatePage} updateSize={updateSize} totalElements={totalElements}
                      size={size} page={currentPage}/>
      :
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <div className={"spinner-border"} role={"status"}>
            <span className={"visually-hidden"}>Loading...</span>
          </div>
        </div>
      }
      {totalElements === 0 && <p>No graphs found that satisfy the given conditions.</p>}
    </>
  );
}

export default GraphResultsPage;