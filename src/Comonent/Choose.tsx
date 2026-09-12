// import { FaReact } from "react-icons/fa";
import type { DataType } from "../Type";
import { useState, type Dispatch, type SetStateAction } from "react";

interface ChooseProps {
  skillsData: DataType;
  toslecte: DataType[];
    settoslecte: Dispatch<SetStateAction<DataType[]>>;
}

const Choose = ({ skillsData ,toslecte ,settoslecte}: ChooseProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const hendleisSelected =()=>{


     setIsSelected(true)

     settoslecte([...toslecte , skillsData] )
    
  }

  return (
    <div>
      <div
        className={`w-full max-w-sm rounded-2xl border p-6
        transition-all duration-500
        ${
          isSelected
            ? "border-[#eb6be0]  bg-[#effcff] shadow-[0_0_20px_rgba(44,187,209,0.25)]"
            : "border-slate-200 bg-white shadow-xl"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="text-4xl">
          <img src={skillsData.icon} alt="" className=" h-[40px] w-[40px]"/>
          </div>

          <span className="rounded-full bg-sky-200 px-4 py-2 text-sm font-medium text-sky-600 border border-sky-100">
            {skillsData.badge}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-7 text-2xl font-bold bg-gradient-to-r from-[#0a0807] to-[#100209] bg-clip-text text-transparent">
          {skillsData.name}
        </h2>

        {/* Description */}
        <p className="mt-3 text-base leading-6 text-slate-500">
          {skillsData.description}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-slate-100"></div>

        {/* Info */}
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

        {/* Button */}
        <button
          onClick={() => hendleisSelected()}
          disabled={isSelected}
          className={`mt-5 w-full rounded-xl py-3 font-semibold
          transition-all duration-500
          ${
            isSelected
              ? "bg-[#efe4f0] text-[#c228ba]  shadow-[0_0_15px_rgba(44,187,209,0.35)] cursor-not-allowed"
              : "bg-gradient-to-r from-[#190d05] to-[#17050e] text-white hover:opacity-90"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Available"}
        </button>
      </div>
    </div>
  );
};

export default Choose;