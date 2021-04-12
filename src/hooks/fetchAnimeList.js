import { useState, useEffect } from "react";
// import malScraper from "mal-scraper";

export const useFetchAnimeList = ({
  num,
  search,
  status,
  season,
  genre,
  maxEp,
  minEp,
  adult,
  format,
  sort,
}) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  let graphlQuery;
  if (search && search !== "none") {
    graphlQuery = {
      query: `
        {
            Page(page: 1, perPage: ${num}) {
                media(type: ANIME,search: "${search}"
        ${status && status !== "none" ? ", status:" + status : ""}
        ${season && season !== "none" ? ", season:" + season : ""}
        ${genre && genre !== "none" ? ", genre:" + genre : ""}
        ${maxEp && maxEp !== "none" ? ", episodes_greater:" + maxEp : ""}
        ${minEp && minEp !== "none" ? ", episodes_lesser:" + minEp : ""}
        ${adult && adult !== "none" ? ", isAdult:" + adult : ""}
        ${sort && sort !== "none" ? ", sort:" + sort : ""}
        ${format && format !== "none" ? ", format:" + format : ""}
        ) {
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
  } else if (genre && genre !== "none") {
    graphlQuery = {
      query: `
        {
            Page(page: 1, perPage: ${num}) {
                media(type: ANIME, genre: "${genre}"
       ${status && status !== "none" ? ", status:" + status : ""}
        ${season && season !== "none" ? ", season:" + season : ""}
        ${maxEp && maxEp !== "none" ? ", episodes_greater:" + maxEp : ""}
        ${minEp && minEp !== "none" ? ", episodes_lesser:" + minEp : ""}
        ${adult && adult !== "none" ? ", isAdult:" + adult : ""}
        ${sort && sort !== "none" ? ", sort:" + sort : ""}
        ${format && format !== "none" ? ", format:" + format : ""}

        ) {
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
  } else {
    graphlQuery = {
      query: `
        {
            Page(page: 1, perPage: ${num}) {
                media(type: ANIME
       ${status && status !== "none" ? ", status:" + status : ""}
        ${season && season !== "none" ? ", season:" + season : ""}
        ${genre && genre !== "none" ? ", genre:" + genre : ""}
        ${maxEp && maxEp !== "none" ? ", episodes_greater:" + maxEp : ""}
        ${minEp && minEp !== "none" ? ", episodes_lesser:" + minEp : ""}
        ${adult && adult !== "none" ? ", isAdult:" + adult : ""}
        ${sort && sort !== "none" ? ", sort:" + sort : ""}
        ${format && format !== "none" ? ", format:" + format : ""}

        ) {
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
  }
  const getAnimeSearch = () => {
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
          setList(array);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    getAnimeSearch();
  }, [num, search, status, season, genre, maxEp, minEp, adult, sort]);

  return { loading, list };
};
