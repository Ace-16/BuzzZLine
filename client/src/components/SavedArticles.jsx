import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import News from "./News";

const SavedArticles = () => {
  let user = useSelector((state) => state.auth.user);
  let articles = user.savedArticles;
  useEffect(() => {
    console.log(articles);
  }, [user, articles]);

  return (
    <div className="flex h-min bg-light-purple">
      <div className="pt-24 m-auto">
        {articles.map((article, index) => (
          <News key={index} article={article} articleState={false} />
        ))}
      </div>
    </div>
  );
};

export default SavedArticles;
