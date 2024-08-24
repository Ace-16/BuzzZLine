import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions";

const Register = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    username: "",
  });
  const { email, fname, lname, password, username } = inputValue;
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
      className: "bg-red-500 text-white font-semibold p-4 rounded-lg",
      icon: "🚫",
    });
  };
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
      className: "bg-green-500 text-white font-semibold p-4 rounded-lg", // Tailwind styles
      icon: "✅",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, user } = data;
      if (success) {
        dispatch(registerUser(user));
        localStorage.setItem("user", JSON.stringify(user));
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setInputValue({
          ...inputValue,
          email: "",
          fname: "",
          lname: "",
          password: "",
          username: "",
        });
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-dvh bg-lighter-purple flex pt-24">
      <div className="h-96 w-80 m-auto bg-purple flex flex-col rounded-lg">
        <form action="" onSubmit={handleSubmit}>
          <div className="mx-4 mt-7 mb-3 flex justify-between">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={fname}
              onChange={handleOnChange}
              className="px-3 h-9 w-32 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={lname}
              onChange={handleOnChange}
              className="px-3 h-9 w-32 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={handleOnChange}
            className="mx-4 my-3 px-3 h-9 w-72 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleOnChange}
            className="mx-4 my-3 px-3 h-9 w-72 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleOnChange}
            className="mx-4 my-3 px-3 h-9 w-72 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
          />
          <button
            type="submit"
            className="mx-4 w-72 font-SubheadingFont text-xl mt-10 border-2 rounded-lg text-lighter-purple py-1"
          >
            Register
          </button>
        </form>
        <div className="flex h-6">
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
