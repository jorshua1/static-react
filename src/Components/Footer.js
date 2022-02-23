import React from "react";

function Footer() {
  return (
    <div className="py-8 flex justify-center rounded-b-2xl bg-[#161619] items-center">
      <div className="flex justify-evenly w-full h-10">
        <button>
          <i className="fa fa-twitter-square text-slate-300 text-3xl"></i>
        </button>
        <button>
          <i className="fa fa-facebook-square text-slate-300 text-3xl"></i>
        </button>
        <button>
          <i className="fa fa-instagram text-slate-300 text-3xl"></i>
        </button>
        <button>
          <i className="fa fa-github-square text-slate-300 text-3xl"></i>
        </button>
      </div>
    </div>
  );
}
export default Footer;
