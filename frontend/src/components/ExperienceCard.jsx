import React from "react";

const ExperienceCard = ({ name, imgUrl, detail }) => {
  return (
    <div className="flex flex-wrap justify-around ">
      <div className="flex flex-wrap items-center m-10">
        <img className="bg-stone-500 aspect-ratio-video w-[50vh] h-[30vh] "></img>
        <div className="m-5 w-[300px] text-white">
          <h3 className="font-bold">{name ? name : "name of experience"}</h3>
          <p>
            {detail
              ? detail
              : "Aute ea in tempor velit nostrud reprehenderit laboris excepteur."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
