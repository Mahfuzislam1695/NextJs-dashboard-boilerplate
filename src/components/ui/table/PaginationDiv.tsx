import {
  BsFillSkipBackwardFill,
  BsFillSkipStartFill,
  BsFillSkipEndFill,
  BsFillSkipForwardFill,
} from "react-icons/bs";

function PaginationDiv({ table }: { table: any }) {
  return (
    <div>
      {table?.getRowModel().rows?.length > 0 && (
        <div className="flex flex-col items-center justify-between pagination-container p-2 gap-4 md:flex-row">
          <div>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize} entries
                </option>
              ))}
              <option value={table.getCoreRowModel().rows.length}>
                Show all entries
              </option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            Go to page:
            <input
              type="number"
              min={0}
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </div>
          <div className="flex gap-2">
            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.setPageIndex(0)}
              className="disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <BsFillSkipBackwardFill fontSize={24} />
            </button>
            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
              className="disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <BsFillSkipStartFill fontSize={24} />
            </button>
            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
              className="disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <BsFillSkipEndFill fontSize={24} />
            </button>
            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              className={`disabled:opacity-25 disabled:cursor-not-allowed`}
            >
              <BsFillSkipForwardFill fontSize={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaginationDiv;
// import {
//   BsFillSkipBackwardFill,
//   BsFillSkipStartFill,
//   BsFillSkipEndFill,
//   BsFillSkipForwardFill,
// } from "react-icons/bs";

// function PaginationDiv({ table }: { table: any }) {
//   return (
//     <div>
//       {table?.getRowModel().rows?.length > 0 && (
//         <div className="flex flex-col items-center justify-between pagination-container p-2 gap-4 md:flex-row">
//           <div>
//             <select
//               value={table.getState().pagination.pageSize}
//               onChange={(e) => {
//                 table.setPageSize(Number(e.target.value));
//               }}
//             >
//               {[10, 20].map((pageSize) => (
//                 <option key={pageSize} value={pageSize}>
//                   Show {pageSize} entries
//                 </option>
//               ))}
//               <option value={table.getCoreRowModel().rows.length}>
//                 Show all entries
//               </option>
//             </select>
//           </div>
//           <div className="flex items-center gap-2">
//             Go to page:
//             <input
//               type="number"
//               defaultValue={table.getState().pagination.pageIndex + 1}
//               onChange={(e) => {
//                 const page = e.target.value ? Number(e.target.value) - 1 : 0;
//                 table.setPageIndex(page);
//               }}
//               className="border p-1 rounded w-16"
//             />
//           </div>
//           <div className="flex gap-2">
//             <button
//               disabled={!table.getCanPreviousPage()}
//               onClick={() => table.setPageIndex(0)}
//               className="btn btn-sm btn-circle btn-primary"
//             >
//               <BsFillSkipBackwardFill />
//             </button>
//             <button
//               disabled={!table.getCanPreviousPage()}
//               onClick={() => table.previousPage()}
//               className="btn btn-sm btn-circle btn-primary"
//             >
//               <BsFillSkipStartFill />
//             </button>
//             <button
//               disabled={!table.getCanNextPage()}
//               onClick={() => table.nextPage()}
//               className="btn btn-sm btn-circle btn-primary"
//             >
//               <BsFillSkipEndFill />
//             </button>
//             <button
//               disabled={!table.getCanNextPage()}
//               onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//               className="btn btn-sm btn-circle btn-primary"
//             >
//               <BsFillSkipForwardFill />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PaginationDiv;

// import React from "react";
// import {
//   BsChevronLeft,
//   BsChevronRight,
//   BsSkipEnd,
//   BsSkipStart,
// } from "react-icons/bs";

// const PaginationDiv = ({
//   gotoPage,
//   canPreviousPage,
//   previousPage,
//   pageIndex,
//   canNextPage,
//   nextPage,
//   pageCount,
// }) => {
//   return (
//     <div className="print:hidden flex justify-between bg-gray-200 border border-indigo-200 p-2">
//       <div className="flex">
//         <span className="mr-2">Go to Page: </span>
//         <input
//           className=" pl-4 p-1 block bg-white w-3/12 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
//           type="number"
//           min="1"
//           // defaultValue={pageIndex + 1}
//           onChange={(e) => {
//             const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
//             gotoPage(pageNumber);
//           }}
//         />
//       </div>

//       <div className="flex justify-center items-center gap-2">
//         <button
//           className={` ${
//             !canPreviousPage ? "text-gray-400" : "text-indigo-700"
//           }`}
//           onClick={() => gotoPage(0)}
//           disabled={!canPreviousPage}
//         >
//           <BsSkipStart fontSize={24} />
//         </button>

//         <button
//           className={`${
//             !canPreviousPage ? "text-gray-400" : "text-indigo-700"
//           }`}
//           onClick={() => previousPage()}
//           disabled={!canPreviousPage}
//         >
//           <BsChevronLeft fontSize={20} />
//         </button>

//         <div className="text-indigo-700 text-lg">{pageIndex + 1}</div>

//         <button
//           className={` ${!canNextPage ? "text-gray-400" : "text-indigo-700"}`}
//           onClick={() => nextPage()}
//           disabled={!canNextPage}
//         >
//           <BsChevronRight fontSize={20} />
//         </button>

//         <button
//           className={` ${!canNextPage ? "text-gray-400" : "text-indigo-700"}`}
//           onClick={() => gotoPage(pageCount - 1)}
//           disabled={!canNextPage}
//         >
//           <BsSkipEnd fontSize={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaginationDiv;
