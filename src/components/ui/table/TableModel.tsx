"use client";

import { flexRender } from "@tanstack/react-table";
import React, { useState } from "react";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";

type TableModelProps = {
  table: any; // Replace 'any' with the specific type for your table if available
};

const TableModel: React.FC<TableModelProps> = ({ table }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleRowClick = (rowId: string) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(rowId)) {
        // If the row is already selected, remove it from the selectedRows array
        return prevSelectedRows.filter((id) => id !== rowId);
      } else {
        // If the row is not selected, add it to the selectedRows array
        return [...prevSelectedRows, rowId];
      }
    });
  };

  return (
    <div className="rounded-md bg-white p-2">
      <div className="max-w-full overflow-x-auto">
        {/* {table?.getRowModel().rows.length === 0 ? (
					<div className="text-center font-semibold text-lg p-4">
						No information available
					</div>
				) : ( */}
        <table className="data-table w-full">
          <thead className="bg-stone-100">
            {table
              .getHeaderGroups()
              .map((headerGroup: { id: string; headers: any[] }) => (
                <tr key={headerGroup.id} className="border">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="p-2 last:pb-10 first:pb-10">
                      <div onClick={header.column.getToggleSortingHandler()}>
                        <div className="flex items-center gap-2 justify-center cursor-pointer select-none">
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                          {/* ============================================== */}
                          {/* <div className="sort-icon border border-red-800 p-4">
														{
															{
																asc: <PiCaretUpFill />,
																desc: <PiCaretDownFill />,
															}[
																(header.column.getIsSorted() as
																	| "asc"
																	| "desc"
																	| undefined) ?? "asc"
															]
														}
														
													</div> */}

                          {header.column.getCanSort() &&
                            (header.column.getIsSorted() === "asc" ? (
                              <TiArrowSortedUp className="inline" />
                            ) : header.column.getIsSorted() === "desc" ? (
                              <TiArrowSortedDown className="inline" />
                            ) : (
                              <TiArrowUnsorted className="inline" />
                            ))}

                          {/* <div className="sort-icon">
														{
															{
																asc: <PiCaretUpFill />,
																desc: <PiCaretDownFill />,
															}[header.column.getIsSorted() ?? null]
														}
													</div> */}
                        </div>
                      </div>
                      {header.column.getCanFilter() ? (
                        <div>
                          <input
                            type="text"
                            className="my-1 px-4 py-1 w-full column-filter bg-white border border-gray-200 outline-none rounded-md font-medium"
                            onChange={(e) =>
                              header.column.setFilterValue(e.target.value)
                            }
                          />
                        </div>
                      ) : null}
                    </th>
                  ))}
                </tr>
              ))}
          </thead>

          <tbody>
            {table
              .getRowModel()
              .rows.map((row: { id: string; getVisibleCells: () => any[] }) => (
                <tr
                  key={row.id}
                  className={`border ${
                    selectedRows.includes(row.id)
                      ? "bg-slate-300"
                      : "even:bg-[#F6F6F6]"
                  }`}
                  onClick={() => handleRowClick(row.id)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        {/* )} */}
      </div>
    </div>
  );
};

export default TableModel;
