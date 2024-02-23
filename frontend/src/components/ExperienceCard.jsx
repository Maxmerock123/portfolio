import React from "react";

const ExperienceCard = () => {
  return (
    <div className="flex flex-wrap justify-around ">
      <div className="flex flex-wrap items-center m-10">
        <img className="bg-stone-500 aspect-ratio-video w-[50vh] h-[30vh] "></img>
        <div className="m-5 w-[300px] text-white">
          <h3 className="font-bold">name of experiece</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
