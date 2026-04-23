function showLoader() {
  const icon = document.querySelector(".loading-in");
  icon.style.display = "none";
}

setTimeout(() => {
  showLoader();
}, 1200);

function bodyCSS() {
  const body = document.body;
  body.style.justifyContent = "flex-start";
  const header = document.querySelector("header");
  header.style.display = "block";
}

function showGlassIcon() {
  setTimeout(() => {
    const glassIcon = document.querySelector(".glass-icon");
    glassIcon.style.visibility = "visible";
  }, 1500);
}

function showHeader() {
  const ul = document.querySelector(".desktop-ul");
  ul.style.display = "flex";
  showGlassIcon();
  bodyCSS();
}

function showMobileMenu() {
  const mobileMenu = document.querySelector(".menu-icon");
  mobileMenu.style.display = "block";
  showGlassIcon();
  bodyCSS();
}

function getGlassMeasurments() {
  const glassIcon = document.querySelector(".glass-icon");
  const measurments = glassIcon.getClientRects();
  console.log(measurments); // returns the height and width of the glass SVG
  let y = measurments[0].width;
  let x = measurments[0].height;
  return [x, y];
}

function getCloudMeasurments() {
  const cloudIcon = document.querySelector(".thought-bubble-icon ");
  const measurments = cloudIcon.getClientRects();
  console.log(measurments);
  let y = measurments[0].width;
  let x = measurments[0].width;
  return [x, y];
}

function thoughtBubbleTransform() {
  let [x, y] = getCloudMeasurments();
  let width = -0.000999999999999;
  let height = 0.4;
  let setHeight = height * x;
  let setWidth = width * y;
  const cloudIcon = document.querySelector(".thought-bubble-text");
  cloudIcon.style.transform = `translate(${setHeight}px, ${setWidth}px)`;
}

thoughtBubbleTransform();

function reactKeyframe(xAxis, yAxis) {
  const style = document.createElement("style");
  document.head.appendChild(style);
  style.innerHTML = `
  @keyframes reactDropIn {
  0% {
    transform: translate(${xAxis}px, -10000px);
    visibility: visible;
  }
  100% {
    transform: (${xAxis}px, ${yAxis}px);
    visibility: visible;
  }
}`;
}

function htmlKeyframe(xAxis, yAxis) {
  const style = document.createElement("style");
  document.head.appendChild(style);
  style.innerHTML = `
  @keyframes htmlDropIn {
  0% {
    transform: translate(${xAxis}px, -10000px);
    visibility: visible;
  }
  100% {
    transform: (${xAxis}px, ${yAxis}px);
    visibility: visible;
  }
}
  `;
}

function jsKeyframe(xAxis, yAxis) {
  const style = document.createElement("style");
  document.head.appendChild(style);
  style.innerHTML = `
  @keyframes jsDropIn {
  0% {
    transform: translate(${xAxis}px, -10000px);
    visibility: visible;
  }
  100% {
    transform: (${xAxis}px, ${yAxis}px);
    visibility: visible;
  }
}
  `;
}

function cssKeyframe(xAxis, yAxis) {
  const style = document.createElement("style");
  document.head.appendChild(style);

  style.innerHTML = `
  @keyframes cssDropIn {
  0% {
    transform: translate(${xAxis}px, -10000px);
    visibility: visible;
  }
  100% {
    transform: (${xAxis}px, ${yAxis}px);
    visibility: visible;
  }
}
  `;
}

function cssIcon() {
  let [x, y] = getGlassMeasurments();
  const css = document.querySelector(".css-icon");
  let width = 1.001;
  let height = 0.25;
  let setHeight = height * x;
  let setWidth = width * y;
  css.style.transform = `translate(${setHeight}px,${width * y}px)`; //dynamically sets the transform positions for the cssIcon
  cssKeyframe(setHeight, setWidth);
}

function jsIcon() {
  let [x, y] = getGlassMeasurments();
  const js = document.querySelector(".js-icon");
  let width = 1.001;
  let height = 0.5;
  let setHeight = height * x;
  let setWidth = width * y;
  js.style.transform = `translate(${setHeight}px,${width * y}px)`;
  jsKeyframe(setHeight, setWidth);
}

function htmlIcon() {
  let [x, y] = getGlassMeasurments();
  const html = document.querySelector(".html-icon");
  let width = 0.771;
  let height = 0.5;
  let setHeight = height * x;
  let setWidth = width * y;
  html.style.transform = `translate(${setHeight}px,${width * y}px)`;
  htmlKeyframe(setHeight, setWidth);
}

function reactIcon() {
  let [x, y] = getGlassMeasurments();
  const react = document.querySelector(".react-icon");
  let width = 0.78;
  let height = 0.3;
  let setHeight = height * x;
  let setWidth = width * y;
  react.style.transform = `translate(${setHeight}px,${width * y}px)`;
  reactKeyframe(setHeight, setWidth);
}

function showHome() {
  const home = document.querySelector(".home-body");
  home.style.display = "flex";
}

function show(className) {
  const element = document.querySelector(className);
  element.style.visibility = "visible";
  const style = document.createElement("style");
  document.head.appendChild(style);

  style.innerHTML = `
  @keyframes easingIn {
  0% {
    opacity: 0.2
  }
  100% {
   opacity: 1;
  }
}
  `;
}

function execute() {
  show(".thought-bubble-icon");
  show(".arrow-down-icon");
  show(".thought-bubble-text");
}

function mobileNavBar() {
  const navBar = document.querySelector(".mobile-nav-bar");
  const el1 = document.querySelector(".about-mobile");
  const openIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  el1.addEventListener("click", () => {
    navBar.style.display = "none";
  });
  openIcon.addEventListener("click", () => {
    navBar.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    navBar.style.display = "none";
  });
}

mobileNavBar();

setTimeout(() => {
  execute();
}, 6500);

setTimeout(() => {
  showLoader();
  if (window.innerWidth <= 1200) {
    showMobileMenu();
    cssIcon();
    jsIcon();
    htmlIcon();
    reactIcon();
    showHome();
  } else {
    showHeader();
    cssIcon();
    jsIcon();
    htmlIcon();
    reactIcon();
    showHome();
  }
}, 1500);
