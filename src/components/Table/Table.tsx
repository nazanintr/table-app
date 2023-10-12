import React, { useState, useEffect } from "react";
import "./style.css";
import { TableProps } from "./Table.types";

const Table = <T extends object>({
  data,
  useMockData,
  currentPage,
  columns,
  customHeader,
  customColumnHeaders,
  pagination = false,
  itemsPerPage,
  totalEntries,
  onNextPage,
  onPreviousPage,
  selectedRows,
  getSelectedRows,
  setSelectedRows,
}: TableProps<T>) => {
  const [tableData, setTableData] = useState<T[]>([]);
  const [selectingMode, setSelectingMode] = useState(false);

  useEffect(() => {
    setTableData(data as T[]);
  }, [data, tableData]);

  const handleRowSelect = (row: T) => {
    /* Reviewer Note: Toggle row selection when a checkbox is clicked*/
    if (selectedRows.includes(row)) {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow !== row)
      );
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const itemsToShow = useMockData
    ? tableData.slice(startIdx, endIdx)
    : tableData;

  return (
    <div className="table-container">
      <button onClick={() => setSelectingMode(!selectingMode)}>
        {selectingMode ? "Switch to Normal Table" : "Switch to Selecting Table"}
      </button>
      {/* Reviewer Note:
        Add a button to trigger selected rows evaluation
      */}
      {selectingMode && (
        <button onClick={() => console.log(JSON.stringify(getSelectedRows()))}>
          Get Selected Rows
        </button>
      )}
      <table className="table">
        <thead>
          <tr>
            {customHeader ? (
              <th colSpan={columns.length + 1}>{customHeader}</th>
            ) : (
              <>
                <th></th>
                {customColumnHeaders
                  ? customColumnHeaders.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))
                  : columns.map((column, index) => (
                      <th key={index}>{String(column)}</th>
                    ))}
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {itemsToShow.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {selectingMode && (
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row)}
                    onChange={() => handleRowSelect(row)}
                  />
                </td>
              )}
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{String(row[column])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pagination && (
        <div className="pagination">
          <div className="pagination-left">
            <p>
              showing {Math.min(startIdx + 1, totalEntries)} to{" "}
              {Math.min(endIdx, totalEntries)} of {totalEntries} entries
            </p>
          </div>
          <div className="pagination-right">
            <button disabled={currentPage === 1} onClick={onPreviousPage}>
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button disabled={endIdx >= totalEntries} onClick={onNextPage}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
