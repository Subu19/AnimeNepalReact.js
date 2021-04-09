import { useState, useEffect } from "react";
import malScraper from "mal-scraper";

export const useFetchNews = (num) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const getNews = () => {
    malScraper
      .getNewsNoDetails(num)
      .then((data) => {
        setNews(data);
        setLoading(false);
        console.log("fetched news");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNews();
  }, [num]);

  return { loading, news };
};
