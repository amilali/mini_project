let rec = document.getElementById("rectangle");

rec.addEventListener("mouseover", (event) => {
  event.target.style.width = "100%";
});


rec.addEventListener("mouseout", (event) => {
    event.target.style.width = ""; // This will remove the inline style, reverting to the element's default width
  });