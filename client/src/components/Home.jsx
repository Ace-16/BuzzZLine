import React from "react";
import Newsfeed from "./Newsfeed";
import Chatlist from "./Chatlist";

const Home = () => {
  return (
    <div className="grid grid-cols-12 pt-24 px-5 h-dvh bg-lighter-purple">
      <div className="col-span-3">
        <Chatlist />
      </div>
      <div className="max-h-lvh min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
      <div className="col-span-8">
        <Newsfeed />
      </div>
    </div>
  );
};

export default Home;
