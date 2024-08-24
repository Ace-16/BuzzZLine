import React from "react";
import { FaBookmark } from "react-icons/fa";

const News = ({ article }) => {
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
          className="text-white hover:underline"
        >
          Read More
        </a>
        <div className="flex">
          <FaBookmark className=" text-lighter-purple mt-1 mx-0.5" />
          <button className="text-white hover:underline">
            Save this article
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
