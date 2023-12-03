import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";


const App = () => {
  return (
    <div className="p-8 flex flex-col gap-14 font-poppins dark:bg-gray-800 dark:text-white transition-all duration-700  ">
      <Header />
      <Home />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
};

export default App;
