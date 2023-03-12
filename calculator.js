let result=document.getElementById("inputext");

let calculate=(number)=>{
    result.value+=number;
}
let Result=()=>{
    result.value = eval(result.value);
}
function clr(){
    result.value= "";
}
function del(){
    result.value=result.value.slice(0,-1);
}



const Switch = document.getElementById("switch");

Switch.addEventListener("click", () => {
   document.body.classList.switch("dark");
   if (theme === "dark") {
     window.localStorage.setItem("theme", "light");
   } else window.localStorage.setItem("theme", "dark");
});