import React, { useState, useEffect } from "react";
import News from "./News";

const Newsfeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url =
          "https://newsapi.org/v2/top-headlines?" +
          "sources=bbc-news&" +
          "apiKey=3457418416c345faabc0fdca2f443103";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="text-darker-purple font-BodyFont p-5 h-[80vh]">
      {loading ? (
        <div className="loading-screen text-center text-xl">Loading...</div>
      ) : error ? (
        <p className="error-message text-red-500 text-center">{error}</p>
      ) : (
        <div className="overflow-y-scroll h-full p-4 border rounded-lg bg-dark-purple shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <News key={index} article={article} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsfeed;
