import { useState } from "react";
import type { DataType } from "../Type";
import Choose from "./Choose";
import Select from "./Select";

interface TecCardProps {
  skillsData: DataType[];
}

const TecCard = ({ skillsData }: TecCardProps) => {
  const [toslecte, settoslecte] = useState<DataType[]>([]);

  return (
    <div>
      <div className="flex w-full my-5 justify-between gap-5">

        <div className="w-3/4 grid grid-cols-3 gap-5">
          {skillsData.map((skillsData, int) => {
            return (
              <Choose
                skillsData={skillsData}
                key={int}
                toslecte={toslecte}
                settoslecte={settoslecte}
              />
            );
          })}
        </div>

        <div className="w-1/4 ml-auto">
          <Select
            toslecte={toslecte}
            settoslecte={settoslecte}
          />
        </div>

      </div>
    </div>
  );
};

export default TecCard;