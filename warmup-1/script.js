let rect = document.getElementById("rectangle");

rect.addEventListener("mousemove", (del)=>{
    let RectLoc = rect.getBoundingClientRect();
    let insideRec = del.clientX;
    let difference =   RectLoc.left - insideRec;

    if(difference < RectLoc.width/2)
    {
        let RedColor = gsap.utils.mapRange(0,RectLoc.width/2,255,0, difference);
        gsap.to(rect,{
            backgroundColor: `rgb(${RedColor},0,0)`,
            ease: "Power4",
        });
    }   
});