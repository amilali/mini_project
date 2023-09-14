const btn=document.querySelector("#throttle");
     
// Throttling Function
const throttleFunction=(func, delay)=>{
 
    let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    console.log(now-prev, delay);

    if(now - prev> delay){
      prev = now;
      return func(...args); 
    }
  }
}
document.getElementById("center").addEventListener("mousemove", throttleFunction((det)=>{
  let div = document.createElement("div");
  div.classList.add("divimg");
  div.style.left = det.clientX + "px";
  div.style.top= det.clientY+"px";

  let img = document.createElement("img");
  img.setAttribute("src", "https://www.gifcen.com/wp-content/uploads/2022/02/hello-gif-6.gif");
 
  div.appendChild(img);
  document.body.appendChild(div);


  gsap.to(img,{
    y: "0",
    duration: 0.6,
    ease: Power3
  })


  gsap.to(img,{
    y: "100",
    duration: 0.6,
    ease: Power3,
    delay: 0.6
  })
  setTimeout(()=>{
    div.remove();
  },1500);
}, 200));