import { useState, useEffect } from "react";
import malScraper from "mal-scraper";

export const useFetchTrending = (num) => {
  const [loading, setLoading] = useState(true);
  const [trending, setTrending] = useState([]);
  const graphlQuery = {
    query: `
        {
            Page(page: 1, perPage: ${num}) {
                media(status: RELEASING, type: ANIME, sort: TRENDING_DESC) {
                id
                status
                title {
                    romaji
                    english
                    native
                }
                coverImage {
                    medium
                }
                episodes
                nextAiringEpisode {
                    timeUntilAiring
                    episode
                }
                isAdult
                bannerImage
                genres
                }
            }
            }
        `,
  };
  const getTrending = () => {
    fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphlQuery),
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonFormat) => {
        ///////////handeling error json////////
        if (jsonFormat.errors) {
          console.log(jsonFormat.errors);
        } else {
          ////////////responded data in json//////////////
          const array = jsonFormat.data.Page.media;
          setTrending(array);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    getTrending();
  }, [num]);

  return { loading, trending };
};
