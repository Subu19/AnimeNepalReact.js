import React, { useEffect, useState } from "react";
import { useFetchNews } from "./fetchNews";
import Loading, { SmallLoading } from "../loading";
const News = () => {
  const [newsCount, setNewsCount] = useState(10);
  const { loading, news } = useFetchNews(newsCount);
  const [showingMore, setShowingMore] = useState(false);
  useEffect(() => {
    setShowingMore(false);
  }, [news]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        news.map((eachNews) => {
          return (
            <div className="news" key={eachNews.newsNumber}>
              <div className="newsImgBox">
                <img src={eachNews.image} alt="" />
              </div>
              <div className="newsDetails">
                <div className="newsTitle">{eachNews.title}</div>
                <div className="newsText">{eachNews.text}</div>
              </div>
            </div>
          );
        })
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        {showingMore ? (
          <SmallLoading></SmallLoading>
        ) : (
          <ShowMore
            setNewsCount={setNewsCount}
            setShowingMore={setShowingMore}
            newsCount={newsCount}
          ></ShowMore>
        )}
      </div>
    </div>
  );
};

const ShowMore = ({ setNewsCount, setShowingMore, newsCount }) => {
  return (
    <button
      className="showMore"
      onClick={() => {
        setShowingMore(true);
        setNewsCount(newsCount + 10);
      }}
    >
      Show More
    </button>
  );
};

export default News;
