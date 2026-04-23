function showAbout() {
  const about = document.querySelector("#about");
  about.style.visibility = "visible";

  const style = document.createElement("style");
  document.head.appendChild(style);
  style.innerHTML = `
    @keyframes aboutSlideIn {
    0%{
    opacity: 0;
    visibility: hidden;
    transform: translateX(-100px)
    }
    100%{
    opacity: 1;
    visibility: visible;
    transform: translateX(0px)
    }
    }
    `;
}

setTimeout(() => {
  showAbout();
}, 9000);
