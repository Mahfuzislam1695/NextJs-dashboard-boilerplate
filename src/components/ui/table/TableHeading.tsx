import { handleAddModalOpen } from "@/redux/Reducer/MainSlice";
import React from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../dialog";

interface TableHeadingProps {
  headName: string;
  buttonName: string;
}

const TableHeading: React.FC<TableHeadingProps> = ({
  headName,
  buttonName,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between mb-2 print:hidden">
      <div className="mb-2 text-base font-semibold text-sky-600">
        {headName}
      </div>
      <div
        onClick={() => dispatch(handleAddModalOpen())}
        // htmlFor="my_modal_2"
        className="bg-primary hover:bg-red-800  py-1 px-4 rounded-lg text-sm font-bold flex items-center justify-center border-2 border-red-800 text-red-800 hover:text-white"
      >
        <Dialog>
          <DialogTrigger className="">{buttonName}</DialogTrigger>

          <DialogContent className="z-[9999999999999999999999999999] bg-white lg:max-w-[900px]">
            <DialogHeader>
              <DialogDescription>dialog</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TableHeading;
