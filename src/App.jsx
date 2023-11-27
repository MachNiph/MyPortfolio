import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="m-8 flex flex-col gap-14 font-poppins ">
      <Header />
      <Home />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
};

export default App;
