import type { Dispatch, SetStateAction } from "react";
import type { DataType } from "../Type";
import SelectedCard from "./selectedCard";

interface SelectProps {
  toslecte: DataType[];
  settoslecte: Dispatch<SetStateAction<DataType[]>>;
}

const Select = ({ toslecte, settoslecte }: SelectProps) => {

  if (toslecte.length === 0) {
    return (
      <div className="flex border border-gray-300 rounded-2xl bg-gray-50 p-4">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 w-full max-w-md">

          <h2 className="text-slate-900 text-xl font-bold">
            Your Stack
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            No technologies selected yet.
          </p>

          <div className="mt-6 border border-gray-300 rounded-2xl flex items-center justify-center h-28">
            <p className="text-slate-400 text-sm">
              Your stack is empty.
            </p>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="flex border border-gray-300 rounded-2xl bg-gray-50 p-4">

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 w-full max-w-md">

        <h2 className="text-slate-900 text-xl font-bold">
          Your Stack
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          {toslecte.length} Technology Selected
        </p>

        <div>
          {toslecte.map((selectedIcon) => (
            <SelectedCard
              key={selectedIcon.id}
              selectedIcon={selectedIcon}
              toslecte={toslecte}
              settoslecte={settoslecte}
            />
          ))}
        </div>

        <div className="w-full max-w-sm rounded-2xl border border-gray-300 p-3 mt-4 flex justify-center">
          <button
            onClick={() => settoslecte([])}
            className="text-xl text-red-700 font-bold"
          >
            Remove All
          </button>
        </div>

      </div>
    </div>
  );
};

export default Select;