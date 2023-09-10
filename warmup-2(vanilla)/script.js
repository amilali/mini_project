// let rec = document.getElementById("rectangle");

window.addEventListener("mousemove", (det) => {
  gsap.to("#imge", {
    left: det.clientX + "px",
    ease: Power3 // Added ".easeInOut" to specify the ease type
  });
});

