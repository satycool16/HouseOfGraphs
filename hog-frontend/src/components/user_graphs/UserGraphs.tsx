import React, {useEffect, useState} from "react";
import {Invariant, InvariantCollection} from "../../entities/Invariant";
import {GraphSearch} from "../../entities/GraphSearch";
import {User} from "../../entities/User";
import api from "../../services/Api";
import GraphTable from "../graph_table/GraphTable";
import {useAppSelector} from "../../app/Hooks";
import {selectCurrentUser} from "../../features/current_user/CurrentUserSlice";

interface Props {
  user: User
}

const UserGraphs = ({user}: Props) => {
  const currentUser: User|undefined = useAppSelector(selectCurrentUser);
  const [invariants, setInvariants] = useState<Invariant[]>();
  const [graphs, setGraphs] = useState<GraphSearch[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const savedPageSize = localStorage.getItem("pageSize");
  const [size, setSize] = useState<number>(savedPageSize !== null ? parseInt(savedPageSize) : 5);
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

  useEffect(() => {
    if(user){
      setLoading(true);
      try {
        api.post("enquiry/user", user.entity.userId, {params: {page: currentPage - 1, size: size}})
          .then(response => {
            console.log(response)
            let searchData = response.data._embedded ? response.data._embedded?.graphSearchModelList : [];
            if(response.data.page.totalElements !== undefined){setTotalElements(response.data.page.totalElements)}
            setGraphs(searchData);
            setLoading(false);
            console.log("loading false")
          });
      } catch(error) {
        console.log(error)
      }
    }
  }, [currentPage, size, user]);


  const updatePage = (page: number) => {
    setCurrentPage(page);
  }

  const updateSize = (size: number) => {
    setSize(size);
    localStorage.setItem("pageSize", String(size));
  }

  return (
    <div>
      {graphs !== undefined && totalElements !== undefined && invariants !== undefined && !loading ?
        <GraphTable invariants={invariants} graphs={graphs} updatePage={updatePage} updateSize={updateSize} totalElements={totalElements} size={size} page={currentPage}/>
        :
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <div className={"spinner-border"} role={"status"}>
            <span className={"visually-hidden"}>Loading...</span>
          </div>
        </div>
      }
      {totalElements === 0 && <p>{user.entity.userId === currentUser?.entity.userId ? "You haven't" : user.fullname + " hasn't" } uploaded any graphs yet.</p>}
    </div>
  );
}

export default UserGraphs;