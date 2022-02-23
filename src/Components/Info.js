import React from "react";
import Andrea from "../Assets/person.jpeg";

function Info() {
  return (
    <div className="flex flex-col items-center">
      <img src={Andrea} alt="She doesn't exists" className="rounded-t-2xl" />
      <div className="py-8 items-center text-center">
        <h1 className="text-white text-3xl">Andrea Garcia</h1>
        <p className="text-orange-300 text-base">Frontend Developer</p>
        <small className=" text-slate-200">andreagarcia.nz</small>
      </div>
      <div className="flex justify-evenly w-full pb-4">
        <button className="bg-slate-200 hover:bg-slate-300 w-36 h-8 rounded-lg">
          {" "}
          <i className="px-2 fa fa-envelope"></i> Email
        </button>
        <button className="bg-sky-600 hover:bg-sky-700 w-36 rounded-lg text-white">
          {" "}
          <i className="px-2 fa fa-linkedin-square"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
