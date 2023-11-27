import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Education from "./pages/Education";

const App = () => {
  return (
    <div className="m-8 flex flex-col gap-6">
      <Header />
      <Home />
      <Skills />
      <Education />
    </div>
  );
};

export default App;
