import React from "react";
import { GiGraduateCap } from "react-icons/gi";

const Education = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <button className="flex items-center gap-2 rounded-lg border-2 border-black p-1">
          <GiGraduateCap />
          <p>Education</p>
        </button>
      </div>

      <div className="flex gap-10 ">
        <div className="flex flex-col ">
          <div className="w-3 bg-slate-800 h-3 rounded-full"></div>
          <div className="w-1 bg-slate-800 h-28 mx-1"></div>
          <div className="w-3 bg-slate-800 h-3 rounded-full"></div>
          <div className="w-1 bg-slate-800 h-28 mx-1"></div>
          <div className="w-3 bg-slate-800 h-3 rounded-full"></div>
        </div>

        <div className=" flex flex-col gap-5">
          <div>
            <p>2016-2018</p>
            <h2 className="font-bold text-red-400">Academic Degree</h2>
            <p>+2 Science</p>
            <p>Kanchanjungs H.S.E.S</p>
          </div>

          <div>
            <p>2018-2023</p>
            <h2 className="font-bold text-red-400">Bachelor's Degree</h2>
            <p>Bachelor in Science Computer Science and IT(Bsc Csit)</p>
            <p>Tribhuvan University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
