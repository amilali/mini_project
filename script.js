let rect = document.getElementById("rectangle");

rect.addEventListener("mousemove", (del)=>{
    console.log(del);
})

rect.addEventListener("mousemove", ()=>{
    rect.style.backgroundColor = "blue";
})

