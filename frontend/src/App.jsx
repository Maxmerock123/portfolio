import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header + Navbar */}
      <body className="bg-cover bg-mesh-gradient h-[5090px] font-kanit">
        <div className="flex justify-center ">
          <div className="flex w-[80%] items-center justify-between m-2 text-white mt-5">
            <h1 className="text-3xl font-bold ">LOGO</h1>
            <h3>About me</h3>
            <h3>Experiences</h3>
            <h3>Skills</h3>
            <h3>Projects</h3>
            <h3>Contact me</h3>
            <button className="px-5 py-2 bg-slate-400 rounded-xl ">
              button
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-row flex-wrap items-center justify-around text-white m-28">
          <div className="max-w-[400px] max-h-[100px]flex flex-col justify-center items-center p-[5vh]  bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
            <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-custom-orange-1 to-custom-orange-2 bg-clip-text">
              Ratchatorn Makmool
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <div className="flex justify-around m-2">
              <button className="px-5 py-2 rounded-xl bg-slate-400">
                button
              </button>
              <button className="px-5 py-2 rounded-xl bg-slate-400">
                button
              </button>
            </div>
          </div>
          <div>
            <img className="w-[500px] h-[500px] " />
          </div>
        </div>

        {/* Experience Section */}
        <div className="m-28">
          <div className="flex justify-center">
            <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-custom-orange-1 to-custom-orange-2 bg-clip-text">
              Experiences
            </p>
          </div>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>

        {/* Dev Skill Section */}
        <div className="flex flex-row flex-wrap items-center justify-around text-white m-28">
          <div className="w-[750px] max-h-[500px] flex flex-col justify-center items-center p-[5vh]  bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
            <p className="m-5 text-3xl font-bold text-transparent bg-gradient-to-r from-custom-orange-1 to-custom-orange-2 bg-clip-text">
              Dev Skills
            </p>
            <div className="flex gap-5 m-5 flex-around">
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
            </div>

            <div className="flex gap-5 m-5 flex-around">
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="flex flex-col items-center">
          <div>
            <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-custom-orange-1 to-custom-orange-2 bg-clip-text">
              Projects
            </p>
          </div>
          <div className="flex flex-wrap justify-center w-[50%] gap-10 m-10 text-white flex-around">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>

        {/* Footer */}
        <div className="w-[100%] h-[500px] flex flex-col justify-center items-center p-[5vh]  bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
          reader
        </div>
      </body>
    </>
  );
}

export default App;
