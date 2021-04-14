export const showAnimeDetail = (e) => {
  const element = e.currentTarget;
  var rect = element.getBoundingClientRect();
  if (window.innerWidth - rect.right < 150) {
    element.getElementsByClassName("animeDetailPopUp")[0].style.left = "-155px";
  } else {
    element.getElementsByClassName("animeDetailPopUp")[0].style.left = "100%";
  }
};
