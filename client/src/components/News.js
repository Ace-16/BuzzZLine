import React from "react";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import { FaBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions";

const News = ({ article, articleState }) => {
  const userId = useSelector((state) => state.auth.user._id);
  const savedArticles = useSelector((state) => state.auth.user.savedArticles);
  const dispatch = useDispatch();

  const saveArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/articles/save-article",
        {
          userId,
          article,
        }
      );

      const { message, success } = response.data;

      if (success) {
        savedArticles.push(article);
        toast.success(message, {
          position: "bottom-right",
          className:
            "bg-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg",
          icon: "✅",
          bodyClassName: "text-sm",
          progressClassName: "bg-white",
        });
      } else {
        toast.error(message, {
          position: "bottom-left",
          className:
            "bg-red-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg",
          icon: "🚫",
          bodyClassName: "text-sm",
          progressClassName: "bg-white",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/articles/remove-article",
        {
          userId,
          article,
        }
      );
      const { message, success, user } = response.data;
      if (success) {
        dispatch(getUser(user));
        toast.success(message, {
          position: "bottom-right",
          className:
            "bg-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg",
          icon: "✅",
          bodyClassName: "text-sm",
          progressClassName: "bg-white",
        });
      } else {
        toast.error(message, {
          position: "bottom-left",
          className:
            "bg-red-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg",
          icon: "🚫",
          bodyClassName: "text-sm",
          progressClassName: "bg-white",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="news-card p-4 bg-purple rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-contain rounded-t-lg mb-2"
        />
      )}
      <h3 className="text-lg font-bold text-lighter-purple mb-2">
        {article.title}
      </h3>
      <p className="text-sm text-lighter-purple mb-3">
        {article.description || "No description available."}
      </p>
      <div className="flex justify-between">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline p-2"
        >
          Read More
        </a>
        {articleState ? (
          <div onClick={saveArticle} className="flex p-2 cursor-pointer">
            <FaBookmark className=" text-lighter-purple mt-1 mx-0.5" />
            <button className="text-white hover:underline">
              Save this article
            </button>
          </div>
        ) : (
          <div onClick={removeArticle} className="flex p-2 cursor-pointer">
            <FaBookmark className=" text-lighter-purple mt-1 mx-0.5" />
            <button className="text-white hover:underline">
              Remove this article
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default News;
