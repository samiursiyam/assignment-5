
import type { DataType } from "../Type";
import type { Dispatch, SetStateAction } from "react";

interface ChooseProps {
  skillsData: DataType;
  toslecte: DataType[];
  settoslecte: Dispatch<SetStateAction<DataType[]>>;
}

const Choose = ({
  skillsData,
  toslecte,
  settoslecte,
}: ChooseProps) => {

  const isSelected = toslecte.some(
    (item) => item.id === skillsData.id
  );

  const hendleisSelected = () => {
    if (isSelected) return;

    settoslecte((prev) => [...prev, skillsData]);
  };

  return (
    <div>
      <div
        className={`w-full max-w-sm rounded-2xl border p-6 transition-all duration-500 ${
          isSelected
            ? "border-[#eb6be0] bg-[#effcff] shadow-[0_0_20px_rgba(44,187,209,0.25)]"
            : "border-slate-200 bg-white shadow-xl"
        }`}
      >

        <div className="flex items-center justify-between">
          <div className="text-4xl">
            <img
              src={skillsData.icon}
              alt=""
              className="h-[40px] w-[40px]"
            />
          </div>

          <span className="rounded-full bg-sky-200 px-4 py-2 text-sm font-medium text-sky-600 border border-sky-100">
            {skillsData.badge}
          </span>
        </div>

        <h2 className="mt-7 text-2xl font-bold">
          {skillsData.name}
        </h2>

        <p className="mt-3 text-base leading-6 text-slate-500">
          {skillsData.description}
        </p>

        <div className="my-5 border-t border-slate-100"></div>

        <div className="flex items-center justify-between text-sm">
          <span className="rounded-md bg-slate-100 px-3 py-1 text-slate-600">
            {skillsData.category}
          </span>

          <span className="text-slate-500">
            {skillsData.level}
          </span>

          <span className="font-medium text-slate-700">
            ⭐️ {skillsData.rating}
          </span>
        </div>

        <button
          onClick={hendleisSelected}
          disabled={isSelected}
          className={`mt-5 w-full rounded-xl py-3 font-semibold transition-all duration-500 ${
            isSelected
              ? "bg-[#efe4f0] text-[#c228ba] cursor-not-allowed"
              : "bg-gradient-to-r from-[#190d05] to-[#17050e] text-white hover:opacity-90"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : " Add to Stack"}
        </button>

      </div>
    </div>
  );
};

export default Choose;
