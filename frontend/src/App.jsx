import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import experienceData from "./data/experienceData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="bg-cover bg-stone-900 h-[100%] font-kanit">
        {/* Header + Navbar */}
        {/* Default height == "5090px" */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-10 py-2 text-white bg-opacity-50 rounded-b-[30px] bg-stone-700 backdrop-blur-lg">
          <h1 className="text-3xl font-bold">LOGO</h1>
          <div className="flex gap-5">
            <h3>About me</h3>
            <h3>Experiences</h3>
            <h3>Skills</h3>
            <h3>Projects</h3>
            <h3>Contact me</h3>
          </div>
          <button className="px-5 py-2 bg-stone-400 rounded-xl">button</button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-row flex-wrap items-center justify-around text-white m-28 ">
          <div className="max-w-[500px] max-h-[300px]flex flex-col justify-center items-center p-[5vh]  bg-stone-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 animate-fade-up animate-once animate-delay-[400ms]">
            <p className="flex justify-center text-3xl font-bold text-transparent bg-gradient-to-r from-custom-orange-1 to-custom-orange-2 bg-clip-text">
              Ratchatorn Makmool
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Eu consequat amet exercitation enim consequat ea nulla.
            </p>
            <div className="flex justify-around m-2">
              <button className="px-5 py-2 rounded-xl bg-stone-400">
                View Resume
              </button>
            </div>
          </div>
          <div>
            <img className="w-[500px] h-[500px] animate-fade-up animate-once animate-delay-[800ms]" />
          </div>
        </div>

        {/* Experience Section */}
        <div className="m-28 animate-fade-up animate-once animate-delay-[1000ms]">
          <div className="flex justify-center">
            <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-custom-orange-1 to-custom-orange-2 bg-clip-text">
              Experiences
            </p>
          </div>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.name}
              name={exp.name}
              detail={exp.detail}
            />
          ))}
        </div>

        {/* Dev Skill Section */}
        <div className="flex flex-row flex-wrap items-center justify-around text-white m-28 animate-fade-up animate-once animate-delay-[400ms]">
          <div className="flex flex-col justify-center items-center px-[100px]  bg-stone-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
            <p className="m-5 text-3xl font-bold text-transparent bg-gradient-to-r from-custom-orange-1 to-custom-orange-2 bg-clip-text">
              Development Skills
            </p>
            <div className="flex flex-wrap items-center justify-around gap-10 m-5 flex-around">
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
            </div>

            <div className="flex flex-wrap items-center justify-around gap-10 m-5 flex-around">
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
        <div className="text-white w-[100%] h-[300px] flex gap-10 justify-center items-center  bg-stone-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
          <div className="w-[50vh]">
            <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-custom-orange-1 to-custom-orange-2 bg-clip-text">
              Contact me
            </p>
            <p>Enim officia laboris amet cillum nulla adipisicing.</p>
            <p>
              {" "}
              Ipsum amet cillum et et.Esse culpa quis qui sunt labore laborum
              cillum nulla tempor Lorem deserunt incididunt nisi minim.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3>Form</h3>
            <input></input>
            <input></input>
            <input></input>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
