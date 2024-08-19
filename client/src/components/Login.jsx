import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" bg-lighter-purple pt-24 flex h-lvh">
      <div className=" m-auto h-96 w-72 text-center text-lighter-purple bg-purple flex flex-col rounded-lg">
        <h1 className="text-center font-HeadingFont mb-2 text-lighter-purple text-3xl py-2">
          Sign In
        </h1>
        <form action="" className="flex flex-col px-5 py-4">
          <h5 className="font-SubheadingFont text-left text-lighter-purple mb-2 text-xl">
            E-mail
          </h5>
          <input
            type="email"
            className="mb-2 px-3 h-8 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
            // value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
          />
          <h5 className="font-SubheadingFont text-left mb-2 text-lighter-purple text-xl">
            Password
          </h5>
          <input
            type="password"
            className="mb-2 px-3 h-8 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="font-SubheadingFont text-xl mt-10 border-2 rounded-lg text-lighter-purple py-1"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <Link to={"/register"} className="px-10 py-3 rounded-lg">
          Not a user? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
