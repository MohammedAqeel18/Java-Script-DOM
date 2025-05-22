const view1= document.getElementById("view1");
console.log(view1);

const view2= document.querySelector("#view2");
console.log(view2);

view1.style.display= "flex";
view2.style.display="none";

const views= document.getElementsByClassName("view");
console.log(views);

const sameViews= document.querySelectorAll(".view");
console.log(sameViews);

const divs= view1.querySelectorAll("div");
console.log(divs);

const sameDivs= view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs= view1.querySelectorAll("div:nth-of-type(2n");
console.log(evenDivs);

evenDivs[4].style.backgroundColor= "red";

for (i=0; i<evenDivs.length;i++){
    evenDivs[i].style.backgroundColor="blue";
    evenDivs[i].style.width="150px";
}


const navText= document.querySelector("nav h1");
console.log(navText);
navText.textContent= "Hello World";

const navBar= document.querySelector("nav");
navBar.innerHTML= '<h1>Hello</h1> <p>World</p>'; 
navBar.style.justifyContent= "space-evenly";

console.log(navBar);

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].children);
console.log(evenDivs[0].childNodes);
console.log(evenDivs[0].firstChild);
console.log(evenDivs[0].lastChild);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[0].nextElementSibling);


view1.style.display="none";
view2.style.display="flex";

view2.style.flexDirection= "row";
view2.style.flexWrap= "wrap";
view2.style.margin="10px";

console.log(view2.lastElementChild);
while(view2.lastChild){
    view2.lastChild.remove();
}


const createDiv=(parent,iter)=>{ 
const newDiv = document.createElement("div");
newDiv.textContent= iter;
newDiv.style.width= "100px";
newDiv.style.height= "100px";
newDiv.style.margin= "10px";
newDiv.style.backgroundColor= "yellow";
newDiv.style.color="black";
newDiv.style.display="flex";
newDiv.style.justifyContent="center";
newDiv.style.alignItems="center";
parent.append(newDiv);

}
for (let i=1; i<11;i++){
    createDiv(view2,i);
}