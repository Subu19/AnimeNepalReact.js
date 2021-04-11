import React, { useEffect } from "react";
import { gsap } from "gsap";
export const PreLoadAnime = ({ items }) => {
  const tempArray = [...Array(items).keys()];
  useEffect(() => {
    gsap.to(".preLoadAnimeBox", {
      duration: 0.5,
      y: 10,
      scale: 1,
      ease: "power2.in",
      stagger: 0.05,
      opacity: 0.5,
    });
  }, []);
  return (
    <>
      {tempArray.map((anime, i) => (
        <div className="preLoadAnimeBox" key={i + "preloadAnime"}>
          <div
            className="animeImage"
            style={{ backgroundColor: "var(--dark5)", borderRadius: "10px" }}
            alt=""
          ></div>
          <div
            className="preLoadAnimeTitle"
            style={{
              marginTop: "5px",
              backgroundColor: "gray",
              borderRadius: "5px",
              maxHeight: "10px",
            }}
          ></div>
        </div>
      ))}
    </>
  );
};
