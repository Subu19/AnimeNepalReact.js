export function clearScrollHistory() {
  const main = document.getElementsByClassName("main")[0];
  main.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
