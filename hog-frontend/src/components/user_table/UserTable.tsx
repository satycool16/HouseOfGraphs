import React, {useEffect, useState, useMemo} from "react";
import {User, UserCollection} from "../../entities/User";
import {Link, useNavigate} from "react-router-dom";
import {CellProps, Column, useBlockLayout, useFlexLayout, useSortBy, useTable} from "react-table";
import Pagination from "../pagination/Pagination";
import Select from "react-select";
import styles from './UserTable.module.css';
import {FaSortUp, FaSortDown} from "react-icons/fa";
import api from "../../services/Api";
import {
  CanonicalFormEnquiry,
  EnquiryTypes, GraphClassEnquiry, GraphIdEnquiry,
  InterestingInvariantEnquiry,
  InvariantEnquiry,
  InvariantRangeEnquiry, TextEnquiry
} from "../../entities/Enquiries";

interface SortBy {
  id: string,
  asc: boolean
}

interface Filter {
  key: string,
  value: string,
  type: string
}

interface UserTableFilter {
  id: string,
  fullname: string,
  email: string,
  userrole: string,
  activated: string
}

interface UserTableRequest {
  page: number,
  size: number,
  sort: string,
  sortDir: string,
  filters: Filter[]
}

const UserTable = () => {
  let navigate = useNavigate();
  const [data, setData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [size, setSize] = useState<number>(15);
  const [totalElements, setTotalElements] = useState<number>();
  const [sortBy, setSortBy] = useState<SortBy>({id: "email", asc: true});
  const [filters, setFilters] = useState<UserTableFilter>({
    id: "",
    fullname: "",
    email: "",
    userrole: "",
    activated: ""
  });

  interface ColumnInfo {
    inputType: string,
    outputType: string,
    options?: {label: string, value: string}[]
  }

  let myMap = new Map<string, ColumnInfo>([
    ["user_id", {inputType: "text", outputType: "i"}],
    ["fullname", {inputType: "text", outputType: "s"}],
    ["email", {inputType: "text", outputType: "s"}],
    ["userrole", {inputType: "select", outputType: "i", options: [{label: "Computer", value: "0"}, {label: "Regular", value: "1"}, {label: "Admin", value: "2"}]}],
    ["activated", {inputType: "select", outputType: "b", options: [{label: "true", value: "true"}, {label: "false", value: "false"}]}]
  ]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        id: "user_id",
        accessor: "entity.userId",
      },
      {
        Header: "Name",
        id: "fullname",
        accessor: "fullname"
      },
      {
        Header: "Email",
        id: "email",
        accessor: "entity.email",
      },
      {
        Header: "Role",
        id: "userrole",
        accessor: d => d.entity.userRole === 0 ? "Computer" : (d.entity.userRole === 1 ? "Regular" : "Admin"),
      },
      {
        Header: "Activated",
        id: "activated",
        accessor: d => d.entity.activated.toString()
      }
    ] as Column<User>[],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable<User>({
    columns, data, manualPagination: true, manualSortBy: true
  })

  const filtersToFilterList = () => {
    let res: Filter[] = [];
    for(let [key, value] of Object.entries(filters)){
      let info = myMap.get(key);
      if(value !== "" && info !== undefined){
        res.push({key: key, value: value, type: info.outputType || "s"})
      }
    }
    return res;
  }

  useEffect(() => {
    let userTableRequest: UserTableRequest = {
      page: currentPage - 1,
      size: size,
      sort: sortBy.id,
      sortDir: sortBy.asc ? "asc": "desc",
      filters: filtersToFilterList()
    }
    api.post<UserCollection>("users", userTableRequest)
      .then((response: any) => {
        let userData = response.data._embedded ? response.data._embedded?.userModelList : [];
        setTotalElements(response.data.page.totalElements);
        setData(userData);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, [currentPage, size, sortBy, filters]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }

  const changeSize = (size: any) => {
    setSize(size.value);
    setCurrentPage(1);
  }

  const handleHeaderClick = (column: any) => {
    if(column.id !== sortBy.id){
      setSortBy({id: column.id, asc: true});
    } else {
      setSortBy({id: column.id, asc: !sortBy.asc})
    }
  }

  const handleChange = (id: string, event: any) => {
    setCurrentPage(1);
    let oldFilters: UserTableFilter = {...filters};
    let info: ColumnInfo | undefined = myMap.get(id);
    if(info !== undefined){
      if(info.inputType === "text"){
        // @ts-ignore
        oldFilters[id] = event.target.value;
      } else if (info.inputType === "select"){
        // @ts-ignore
        oldFilters[id] = event === null ? "" : event.value;
      }
      setFilters(oldFilters);
    }
  }

  const renderSwitch = (columnId: string) => {
    let info: ColumnInfo | undefined = myMap.get(columnId);
    if(info === undefined) {return <></>;}
    switch (info.inputType) {
      case undefined:
        return <></>;
      case "text":
        return <input className={"form-control"} placeholder={"Search " + totalElements + " users"} onChange={e => handleChange(columnId, e)}/>;
      case "select":
        return <Select
          isClearable={true}
          placeholder={"Select..."}
          options={info.options}
          onChange={e => handleChange(columnId, e)}
        />;
      default:
        return <input className={"form-control"} placeholder={"Search " + totalElements + " users"} onChange={e => handleChange(columnId, e)}/>;
    }
  }

  return (
    <>
      <table {...getTableProps()} className={"table table-hover"}>
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} onClick={_ => handleHeaderClick(column)}>
                {column.render('Header')}
                {sortBy.id === column.id && (sortBy.asc ? <FaSortDown/> : <FaSortUp/>)}
                <div onClick={e => e.stopPropagation()}>
                  {renderSwitch(column.id)}
                </div>
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} onClick={_ => navigate("/users/" + row.original.entity.userId)} style={{cursor: "pointer"}}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
        </tbody>
      </table>
      <div className={`${styles.pagination_footer}`}>
        {totalElements !== undefined &&
          (<>
            <p className={`${styles.totalResults}`}><b>{totalElements}</b> {totalElements === 1 ? "user" : "users"} found</p>
            <Pagination onPageChange={handlePageChange} totalCount={totalElements} currentPage={currentPage} pageSize={size}/>
          </>)
        }
        <Select
          defaultValue={{label: "" + size, value: size}}
          options={[5, 10, 15, 20, 30, 50].map(v => ({label: "" + v, value: v}))}
          onChange={changeSize}
        />
      </div>
  </>
  );
}

export default UserTable;
