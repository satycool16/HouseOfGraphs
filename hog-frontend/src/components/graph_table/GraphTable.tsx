import React, {useEffect, useState, useMemo} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CellProps, Column, useTable} from "react-table";
import Pagination from "../pagination/Pagination";
import Select from "react-select";
import styles from './GraphTable.module.css';
import {GraphSearch} from "../../entities/GraphSearch";
import {GraphInvariantEntity} from "../../entities/GraphInvariant";
import {Invariant} from "../../entities/Invariant";
import {displayGraphInvariant} from "../../util/displayGraphInvariant";
import {SearchConditions} from "../../entities/Enquiries";
import {Visualization, VisualizationType} from "../../entities/GraphVisualization";
import GraphVisualizer from "../drawing_tool/graph_visualizer/GraphVisualizer";
import {prepareForVisualization} from "../drawing_tool/graph_visualizer/GraphVisualizerUtil";
import api from "../../services/Api";
import LoadingSpinner from "../loading_spinner/LoadingSpinner";

interface Props {
  graphs: GraphSearch[],
  invariants: Invariant[],
  updatePage: (page: number) => void,
  updateSize: (size: number) => void,
  totalElements: number,
  size: number,
  page: number
}

const GraphVisualization = (props: CellProps<GraphSearch>) => {
  let vis: Visualization = prepareForVisualization(props.row.original.adjacencyList, props.row.original.embedding);
  return <GraphVisualizer propNodes={vis.nodes} propLinks={vis.edges} type={VisualizationType.Static} size={100}/>;
}

const GraphTable = ({invariants, graphs, updatePage, updateSize, totalElements, size, page}: Props) => {
  let navigate = useNavigate();
  const [data, setData] = useState<GraphSearch[]>(graphs);

  const columns = useMemo(
    () => {
      let invCols = invariants.map(i => ({
        Header: i.entity.invariantName,
        id: i.entity.invariantName,
        accessor: (d: GraphSearch) => {
          let graphInv: GraphInvariantEntity|undefined = d.invariantValues.find(j => j.invariantId === i.entity.invariantId);
          if(graphInv){
            return displayGraphInvariant({...graphInv, ...i.entity});
          } else {
            return ""
          }
        },
      }));
      let cols = [
      {
        Header: "",
        id: "graphImage",
        Cell: GraphVisualization
      },
      {
        Header: "Name",
        id: "graphName",
        accessor: "graphName",
      }
    ]
      invCols.forEach(ic => {
        // @ts-ignore
        cols.push(ic);
      })
      return cols as Column<GraphSearch>[]
    },
    [invariants]
  );

  const getInvisibleCols = (visibleCols: string[]) => {
    return invariants.filter(i => !visibleCols.includes(i.entity.invariantName)).map(i => i.entity.invariantName);
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setHiddenColumns
  } = useTable<GraphSearch>({
    columns, data, manualPagination: true,
    initialState: {hiddenColumns: getInvisibleCols(JSON.parse(localStorage.getItem("visibleColumns") || '["Number of Vertices", "Number of Edges"]'))}
  })

  const handleSelectChange = (values: any) => {
    let visible = values.map((v: {label: string, value: string}) => v.value);
    setHiddenColumns(getInvisibleCols(visible));
    localStorage.setItem("visibleColumns", JSON.stringify(visible));
  }

  const selectOptions = invariants.map(i => ({label: i.entity.invariantName, value: i.entity.invariantName}));

  const handlePageChange = (page: number) => {
    updatePage(page);
  }

  const changeSize = (size: any) => {
    updateSize(size.value);
    updatePage(1);
  }

  return (
    <>
      <div>
      {selectOptions.length > 0 && totalElements !== 0 &&
        (<>
          <p className={`${styles.selectLabel}`}>Visible columns</p>
          <Select
              isMulti
              placeholder={"Select invariants you wish to add..."}
              defaultValue={selectOptions.filter(so =>
                  JSON.parse(localStorage.getItem("visibleColumns") || '["Number of Vertices", "Number of Edges"]').includes(so.value)
                )}
              options={selectOptions}
              onChange={values => handleSelectChange(values)}
          />
        <br/>
        <div>
          <table {...getTableProps()} className={"table table-hover"}>
            <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} onClick={_ => navigate("/graphs/" + row.original.graphId)} style={{cursor: "pointer"}}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
            </tbody>
          </table>
          <div className={`${styles.pagination_footer}`}>
            <p className={`${styles.totalResults}`}><b>{totalElements}</b> {totalElements === 1 ? "graph" : "graphs"} found</p>
            <Pagination onPageChange={handlePageChange} totalCount={totalElements} currentPage={page} pageSize={size}/>
            {
              totalElements > 0 &&
                <Select
                    defaultValue={{label: "" + size, value: size}}
                    options={[5, 10, 15, 20, 30, 50].map(v => ({label: "" + v, value: v}))}
                    onChange={changeSize}
                />
            }
          </div>
        </div>
        </>)}
      </div>
    </>
  );
}

export default GraphTable;
