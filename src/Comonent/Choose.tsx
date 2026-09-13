import { toast, Bounce } from "react-toastify";
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

    toast.success(`${skillsData.name} added to stack`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div>
      <div
        className={`w-full max-w-sm rounded-2xl border p-6 transition-all duration-500 ${
          isSelected
            ? "border-pink-400 bg-cyan-50 shadow-lg"
            : "border-slate-200 bg-white shadow-xl"
        }`}
      >
        {/* Icon and Badge */}
        <div className="flex items-center justify-between">
          <div className="text-4xl">
            <img
              src={skillsData.icon}
              alt={skillsData.name}
              className="h-10 w-10"
            />
          </div>

          <span
            className={`mt-1 inline-block rounded-full  px-3 py-1 text-xs font-medium ${skillsData.badgeColor}`}
          >
            {skillsData.badge}
          </span>
        </div>

        {/* Name */}
        <h2 className="mt-7 text-2xl font-bold">
          {skillsData.name}
        </h2>

        {/* Description */}
        <p className="mt-3 text-base leading-6 text-slate-500">
          {skillsData.description}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-slate-100"></div>

        {/* Information */}
        <div className="flex items-center justify-between text-sm">
          <span className="rounded-md bg-slate-100 px-3 py-1 text-slate-600">
            {skillsData.category}
          </span>

          <span className="text-slate-500">
            {skillsData.level}
          </span>

          <span className="font-medium text-slate-700">
            ⭐ {skillsData.rating}
          </span>
        </div>

        {/* Add Button */}
        <button
          type="button"
          onClick={hendleisSelected}
          disabled={isSelected}
          className={`mt-5 w-full rounded-xl py-3 font-semibold transition-all duration-500 ${
            isSelected
              ? "cursor-not-allowed bg-fuchsia-100 text-fuchsia-700"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default Choose;