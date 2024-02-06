import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header + Navbar */}
      <body className="bg-cover bg-mesh-gradient h-[5090px]">
        <div className="flex justify-center">
          <div className="flex w-[80%] items-center justify-between m-2">
            <h1 className="text-3xl font-bold ">LOGO</h1>
            <h3>About me</h3>
            <h3>Experiences</h3>
            <h3>Skills</h3>
            <h3>Projects</h3>
            <h3>Contact me</h3>
            <button className="px-5 py-2 bg-slate-400">button</button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-row justify-center m-10">
          <div className="w-[300px] h-[100px] bg-slate-300">
            <p className="font-bold">header</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <button>button</button>
            <button>button</button>
          </div>
          <img className="w-[100px] h-[100px] " />
        </div>
      </body>
    </>
  );
}

export default App;
