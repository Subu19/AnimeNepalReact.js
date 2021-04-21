import { useState, useEffect } from "react";
// import malScraper from "mal-scraper";

export const useFetchTopAnime = (num) => {
  const [loading, setLoading] = useState(true);
  const [topAnime, setTopAnime] = useState([]);
  const graphlQuery = {
    query: `
        {
            Page(page: 1, perPage: ${num}) {
                media(status: FINISHED, type: ANIME, sort: POPULARITY_DESC) {
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
                format
                }
            }
            }
        `,
  };
  const getTopAnime = () => {
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
          array.map((anime) => {
            if (anime.nextAiringEpisode == null) {
              anime.nextAiringEpisode = { episode: null };
            }
          });
          setTopAnime(array);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    getTopAnime();
  }, [num]);

  return { loading, topAnime };
};
