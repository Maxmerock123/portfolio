import React from "react";
import experience from "../data/experienceData";

const SkillCard = (name, imgUrl) => {
  name = "";
  return (
    <>
    
      <div className="flex flex-center flex-col items-center w-[100px]">
        <img className="w-[100px] h-[100px] bg-slate-50" />
        <p className="m-3">{name ? name : "name"}</p>
      </div>
    </>
  );
};

export default SkillCard;
