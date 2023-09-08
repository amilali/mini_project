let rect = document.getElementById("rectangle");

rect.addEventListener("mousemove", (del)=>{
    console.log(del);
})

rect.addEventListener("mousemove", ()=>{
    rect.style.backgroundColor = "blue";
})

rect.addEventListener("mouseout", ()=>{
    rect.style.backgroundColor = "green";
})
rect.addEventListener("dblclick", ()=>{
    rect.style.backgroundColor = "yellow";
})