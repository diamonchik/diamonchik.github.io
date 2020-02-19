var timelineOpen = new mojs.Timeline({ speed: 1.5 });
var timelineClose = new mojs.Timeline({ speed: 2 });

var _strokeWidth;
var RADIUS = 15;
var hamburger = document.querySelector("#hamburger-open");

var spans = document.getElementsByClassName("spans");
var spanOne = document.querySelector("#spanOne");
var spanTwo = document.querySelector("#spanTwo");
var spanThree = document.querySelector("#spanThree");

var modalMenu = document.querySelector(".modal-menu");

var burst1 = new mojs.Burst({
  parent: hamburger,
  x: "50%",
  y: "50%",
  angle: { 0: 90 },
  radius: { 30: 45 },
  count: 3,
  children: {
    shape: "circle",
    radius: RADIUS,
    scale: { 1: 0 },
    fill: ["#ff4338", "#00b3e3", "#3cd52e"],
    duration: 2000,
    easing: "quad.out"
  }
});

var burst2 = new mojs.Burst({
  parent: hamburger,
  x: "50%",
  y: "50%",
  angle: { 0: 90 },
  radius: { 30: 45 },
  count: 3,
  children: {
    shape: "circle",
    radius: RADIUS,
    scale: { 0: 1 },
    strokeWidth: { 1: 3 },
    opacity: { 1: 0 },
    fill: "transparent",
    stroke: ["#ff4338", "#00b3e3", "#3cd52e"],
    duration: 2000,
    easing: "quad.out"
  }
});

var openBackground = new mojs.Shape({
  fill: "#111820",
  scale: { 0: 8.5 },
  radius: 350,
  delay: 1000,
  easing: "cubic.out",
  backwardEasing: "ease.out",
  duration: 2000
});

burst1.el.style.zIndex = 2;

let cross = spanOne.classList.contains("white");

timelineOpen.add(burst1, burst2, openBackground);

timelineClose.add(openBackground);


hamburger.addEventListener("click", function(e) {

  var cross = spanOne.classList.contains("white");

  modalMenu.classList.toggle("show");

  if (cross) {
    timelineClose.playBackward();
    for (var i = 0; i < spans.length; i++) {
      spans[i].classList.remove("white");
    }
    spanOne.classList.remove("spanOneRotate");
    spanTwo.classList.remove("spanTwoRotate");
    spanThree.classList.remove("spanThreeHide");
  } else {
    timelineOpen.play();

    for (var i = 0; i < spans.length; i++) {
      spans[i].classList.add("white");
    }

    spanOne.classList.add("spanOneRotate");
    spanTwo.classList.add("spanTwoRotate");
    spanThree.classList.add("spanThreeHide");
  }
});