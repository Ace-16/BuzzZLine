import React from "react";

const Register = () => {
  const newRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-dvh bg-lighter-purple flex pt-24">
      <div className="h-96 w-80 m-auto bg-purple flex flex-col rounded-lg">
        <div className="mx-4 mt-7 mb-3 flex justify-between">
          <input
            type="text"
            placeholder="First Name"
            className="px-3 h-9 w-32 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-3 h-9 w-32 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
          />
        </div>
        <input
          type="email"
          placeholder="E-mail"
          className="mx-4 my-3 px-3 h-9 w-72 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
        />
        <input
          type="password"
          placeholder="Password"
          className="mx-4 my-3 px-3 h-9 w-72 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="mx-4 my-3 px-3 h-9 w-72 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
        />
        <button
          type="Register Me"
          className="mx-4 font-SubheadingFont text-xl mt-10 border-2 rounded-lg text-lighter-purple py-1"
          onClick={newRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
