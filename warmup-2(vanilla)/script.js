let imge = document.getElementById("imge");
let rec = document.getElementById("rectangle");

window.addEventListener("mousemove", (det) => {
  var mapperx = gsap.utils.mapRange(0, window.innerWidth, 100+imge.getBoundingClientRect().width/2, window.innerWidth-(100+imge.getBoundingClientRect().width/2), det.clientX);


  var mappery = gsap.utils.mapRange(0, window.innerHeight, 100+imge.getBoundingClientRect().height/2, window.innerHeight-(100+imge.getBoundingClientRect().height/2), det.clientY);


  gsap.to("#imge", {
    left: mapperx + "px",
    ease: Power3,
    top: mappery + "px"
  });
});

