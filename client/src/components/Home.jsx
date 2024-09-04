import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import Newsfeed from "./Newsfeed";
import Chatlist from "./Chatlist";
import { getUser } from "../actions";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      const { username } = user;
      dispatch(getUser(user));
      return status
        ? toast(`Hello ${username}`, {
            position: "top-right",
            className:
              "bg-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg",
            icon: "✅",
            bodyClassName: "text-sm",
            progressClassName: "bg-white",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie, dispatch]);
  console.log(user);
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
