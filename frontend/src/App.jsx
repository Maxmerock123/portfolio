import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold underline">Logo</h1>
        <h3>About me</h3>
        <h3>Exoeriences</h3>
        <h3>Skills</h3>
        <h3>Projects</h3>
        <h3>Contact me</h3>
      </div>
    </>
  );
}

export default App;
