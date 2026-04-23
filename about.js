function showAbout() {
  const about = document.querySelector("#about");
  about.style.display = "flex";

  const style = document.createElement("style");
  document.head.appendChild(style);
  style.innerHTML = `
    @keyframe aboutSlideIn {
    0%{
    transform: translateX(-10000px)
    }
    100%{
    transform: translateX(0px)}
    }
    `;
}

showAbout();
