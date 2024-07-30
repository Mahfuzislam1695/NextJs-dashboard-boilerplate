/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getUser } from "@/api/api";
import FilterDiv from "@/components/ui/table/FilterDiv";
import TableModel from "@/components/ui/table/TableModel";
import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import SubcategoryAdd from "../subcategoryForm/SubcategoryAdd";
import PaginationDiv from "@/components/ui/table/PaginationDiv";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SubcategoryEdit from "../subcategoryForm/SubcategoryEdit";

const SubcategoryTable = () => {
  // ================ DEFINING COLUMN ===============

  const COLUMNS = [
    {
      header: "ID",
      accessorKey: "id",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "User Name",
      accessorKey: "username",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Active Status",
      accessorKey: "activeStatus",
      cell: (row: any) => (
        <>
          {row.row.original.activeStatus ? (
            <div className="text-base font-bold text-[#49A700] text-center">
              Active
            </div>
          ) : (
            <div className="text-base font-bold text-[#F55050] text-center">
              Inactive
            </div>
          )}
        </>
      ),
    },
    {
      header: "Edit",
      accessor: "edit",
      enableSorting: false,
      cell: (row: any) => (
        <Dialog>
          <DialogTrigger className="">
            <button className="  border-2">
              <div className="flex items-center gap-2">
                <MdOutlineEdit className="w-4 h-4 " color="#000000" />
                Edit
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white w-[80vw]">
            <SubcategoryEdit />
          </DialogContent>
        </Dialog>
      ),
    },
  ];

  // ============ DATA FETCHING ============
  const {
    isLoading,
    isError,
    data: user,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  // ================= MEMOIZATION ================
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => user, [user]);

  // ================ TABLE FUNCITONALITY ===============

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  // ================= TABLE INSTANCE PROPERTIES ===========
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnVisibility: columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnVisibilityChange: setColumnVisibility,
  });

  console.log("user", user);

  return (
    <div>
      <div className="text-3xl p-4 border-b-2 border-[#989898]">User table</div>

      <FilterDiv
        filtering={filtering}
        setFiltering={setFiltering}
        data={data}
        table={table}
      >
        <SubcategoryAdd />
      </FilterDiv>

      {isLoading ? (
        <div className="text-6xl font-bold text-cyan-800">loading .....</div>
      ) : (
        <TableModel table={table} />
      )}

      {!isLoading && <PaginationDiv table={table} />}
    </div>
  );
};

export default SubcategoryTable;
