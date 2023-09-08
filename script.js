let rect = document.getElementById("rectangle");

rect.addEventListener("mousemove", (del)=>{
    let RectLoc = rect.getBoundingClientRect();
    let insideRec = del.clientX;
    let difference =   insideRec - RectLoc.left;

    if(difference < RectLoc.width/2)
    {
        let RedColor = gsap.utils.mapRange(0,RectLoc.width/2,255,0, difference);
        gsap.to(rect,{
            backgroundColor: `rgb(${RedColor},0,0)`,
            ease: "Power4",
        });
    }
    else {
        // Reverse the calculation for blueColor
        let blueColor = gsap.utils.mapRange(RectLoc.width / 2, RectLoc.width, 0, 255, difference);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: "Power4",
        });
    }

});

// rect.addEventListener("mousemove", ()=>{
//     rect.style.backgroundColor = "blue";
// })

// rect.addEventListener("mouseout", ()=>{
//     rect.style.backgroundColor = "green";
// })
// rect.addEventListener("dblclick", ()=>{
//     rect.style.backgroundColor = "yellow";
// })