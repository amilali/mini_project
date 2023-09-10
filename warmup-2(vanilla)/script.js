let imge = document.getElementById("imge");
let rec = document.getElementById("rectangle");



window.addEventListener("mousemove", (det) => {
  var mapper = gsap.utils.mapRange(0, window.innerWidth, 100+imge.getBoundingClientRect().width/2, window.innerWidth-(100+imge.getBoundingClientRect().width/2), det.clientX);

  gsap.to("#imge", {
    left: mapper + "px",
    ease: Power3,
    top: det.clientY + "px"
  });
});

