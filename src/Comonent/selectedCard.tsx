import { toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
import type { DataType } from "../Type";

interface TselectedIcon {
  selectedIcon: DataType;
  toslecte: DataType[];
  settoslecte: Dispatch<SetStateAction<DataType[]>>;
}

const SelectedCard = ({
  selectedIcon,
  toslecte,
  settoslecte,
}: TselectedIcon) => {

  const hendelOneDelete = (id: number) => {

    const deletedOne = toslecte.filter(
      (item) => item.id !== id
    );

    settoslecte(deletedOne);

    toast.error(`${selectedIcon.name} removed from stack`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-300 p-6 mt-3">

      <div className="flex justify-between items-center">

        <div className="flex gap-4 items-center">

          <img
            src={selectedIcon.icon}
            className="h-[30px]"
            alt=""
          />

          <div>
            <h1 className="text-xl font-bold">
              {selectedIcon.name}
            </h1>

            <h2 className="text-gray-400">
              {selectedIcon.category}
            </h2>
          </div>

        </div>

        <button
          onClick={() => hendelOneDelete(selectedIcon.id)}
          className="text-gray-400"
        >
          x
        </button>

      </div>
    </div>
  );
};

export default SelectedCard;