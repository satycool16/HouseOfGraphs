import React, {useEffect, useState, useMemo} from "react";
import {Column, useTable} from "react-table";
import {FullInvariant} from "../../entities/FullInvariant";
import {displayGraphInvariant} from "../../util/displayGraphInvariant";

interface Props {
  graphInvariants: FullInvariant[]
}

const InvariantTable = ({graphInvariants}: Props) => {
  const [data, setData] = useState<FullInvariant[]>([]);

  useEffect(() => {
    setData(graphInvariants);
  }, [graphInvariants])


  const columns = useMemo(
    () => [
      {
        Header: "Invariant",
        accessor: "invariantName",
      },
      {
        Header: "Value",
        accessor: d => displayGraphInvariant(d),
      }
    ] as Column<FullInvariant>[],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable<FullInvariant>({columns, data})

  return (
    <table {...getTableProps()} className={"table table-hover"}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps(_ => ({style: {background: row.original.ofInterest ? "#DDFFDD" : "#FFFFFF",
            color: row.original.invariantStatus === 0 ? "grey" : "black"}}))}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

export default InvariantTable;
