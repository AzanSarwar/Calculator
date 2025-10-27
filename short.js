let scr = document.querySelector(".scr");
let button = document.querySelectorAll("#btn");

let current = "";
let click = new Audio("click.mp3");

button.forEach(btn =>{
    btn.addEventListener("click",()=>{
      click.play();
const value = btn.innerText;

//check which button was click
if (value==="C") {
    scr.innerText="0";
    current="";
    return;
}else if(value === "="){
  try {
    let expression = current.replace(/x/g, "*").replace(/÷/g, "/");
    let result = eval(expression)
   

    if (!isFinite(result) || isNaN(result)) {
      scr.innerText="Error";
      current="";
      return;
     
    }
 scr.innerText=result;
      current = result.toString();

  } catch  {
    scr.innerText="Error";
    current="";

  }  
return;
};






















current += value;
scr.innerText=current;
scr.scrollLeft = scr.scrollWidth;
    });
});
