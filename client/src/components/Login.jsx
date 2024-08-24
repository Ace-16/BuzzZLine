import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      className:
        "bg-red-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg",
      icon: "🚫",
      bodyClassName: "text-sm",
      progressClassName: "bg-white",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
      className:
        "bg-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg",
      icon: "✅",
      bodyClassName: "text-sm",
      progressClassName: "bg-white",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, user } = data;
      if (success) {
        dispatch(loginUser(user));
        localStorage.setItem("user", JSON.stringify(user));
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setInputValue({
          email: "",
          password: "",
        });
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("An error occurred. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="bg-lighter-purple pt-24 flex h-lvh">
      <div className="m-auto h-96 w-72 text-center text-lighter-purple bg-purple flex flex-col rounded-lg">
        <h1 className="text-center font-HeadingFont mb-2 text-lighter-purple text-3xl py-2">
          Sign In
        </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col px-5 py-4"
        >
          <h5 className="font-SubheadingFont text-left text-lighter-purple mb-2 text-xl">
            E-mail
          </h5>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            className="mb-2 px-3 h-8 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
            required
          />
          <h5 className="font-SubheadingFont text-left mb-2 text-lighter-purple text-xl">
            Password
          </h5>
          <input
            type="password"
            className="mb-2 px-3 h-8 text-darker-purple font-BodyFont text-left rounded-lg bg-lighter-purple"
            value={password}
            name="password"
            onChange={handleOnChange}
            required
          />
          <button
            type="submit"
            className="font-SubheadingFont text-xl mt-10 border-2 rounded-lg text-lighter-purple py-1"
          >
            Sign In
          </button>
        </form>
        <Link to={"/register"} className="px-10 py-3 rounded-lg">
          Not a user? Sign Up
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
