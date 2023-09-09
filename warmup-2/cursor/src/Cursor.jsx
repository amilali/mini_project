import './Cursor.css'
let Cursor = () =>{
    let x = document.getElementById("rectangle");
    x.addEventListener("click", ()=>{
        alert("Hello");
    });
return(
<>
    <div id="rectangle"></div>
</>
);
}

export default Cursor;