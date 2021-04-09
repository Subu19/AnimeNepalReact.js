import React, { useEffect, useState } from "react";
import "../../css/home/trendingSlide.css";
import { useFetchTrending } from "../../hooks/fetchTrending";
import Loading, { SmallLoading } from "../loading";
import "../../css/home/mobile.css";

const TrendingSlide = () => {
  const { loading, trending } = useFetchTrending(5);
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const trendingSlide = document.getElementById("trendingSlide");
    const width = trendingSlide.clientWidth;
    const points = document.getElementsByClassName("scrollPoint");
    for (let i = 0; i < points.length; i++) {
      const element = points[i];
      element.classList.remove("scrollPointSelect");
    }
    points[scrollPos].classList.add("scrollPointSelect");
    // var scrollPixal = trendingSlide.children[scrollPos].getBoundingClientRect()
    //   .left;
    // console.log(scrollPixal + trendingSlide.scrollLeft);
    trendingSlide.scrollTo({
      left: scrollPos * width,
      behavior: "smooth",
    });
  }, [scrollPos]);
  useEffect(() => {
    setInterval(() => {
      setScrollPos((scrollPos) => {
        if (scrollPos >= 4) {
          return 0;
        }
        return scrollPos + 1;
      });
    }, 7000);
  }, []);
  return (
    <>
      <div className="trendingSlide" id="trendingSlide">
        {loading ? (
          <SmallLoading />
        ) : (
          trending.map((anime) => {
            return (
              <div
                key={anime.id}
                className="slideAnimeHolder"
                style={{
                  backgroundImage: `url('${anime.bannerImage}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="slideAnime">
                  <img src={anime.coverImage.medium} alt=""></img>
                  <div className="slideAnimeDetails">
                    <div className="slideAnimeTitles">
                      <div className="mainAnimeTitle">
                        {anime.title.english || " "}
                      </div>
                      <div className="otherAnimeTitle">
                        {anime.title.romaji || " "}
                      </div>
                      <div className="otherAnimeTitle">
                        {anime.title.native || " "}
                      </div>
                    </div>
                    <div className="slideAnimeGenres">
                      {anime.genres.map((genre) => {
                        return <div className="genre">{genre}</div>;
                      })}
                    </div>
                    <div className="slideEpisode">
                      Airing episode {anime.nextAiringEpisode.episode || "IDK"}{" "}
                      in{" "}
                      {new Date(anime.nextAiringEpisode.timeUntilAiring * 1000)
                        .toISOString()
                        .substr(11, 8) || "IDK"}{" "}
                      hours
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="scrollPoints">
        <div className="scrollPoint" onClick={() => setScrollPos(0)}></div>
        <div className="scrollPoint" onClick={() => setScrollPos(1)}></div>
        <div className="scrollPoint" onClick={() => setScrollPos(2)}></div>
        <div className="scrollPoint" onClick={() => setScrollPos(3)}></div>
        <div className="scrollPoint" onClick={() => setScrollPos(4)}></div>
      </div>
    </>
  );
};

export default TrendingSlide;
