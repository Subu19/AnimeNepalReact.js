export const showAnimeDetail = (e) => {
  const element = e.currentTarget;
  var rect = element.getBoundingClientRect();
  console.log(window.innerWidth - rect.right);
  if (window.innerWidth - rect.right < 150) {
    element.getElementsByClassName("animeDetailPopUp")[0].style.left = "-155px";
  } else {
    element.getElementsByClassName("animeDetailPopUp")[0].style.left = "100%";
  }
};
