//web storage api

document.addEventListener("readystatechange",(event)=>{
    if (event.target.readyState === "complete") {
        const app = document.getElementById("view2");
        app.style.display = "none";
        app.style.color = "white";

        const div = app.querySelector("#div");
        const h2 = app.querySelector("#h2");

        const form = document.getElementById("view3");
        form.style.display = "flex";
    }
}); 
const initApp=()=>{

};