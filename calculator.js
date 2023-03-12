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



function wrapper(){
  var click = document.getElementById("phone");
   if(click.style.backgroundColor =="black") {
            click.style.backgroundColor ="wheat";
         }else{ 
            click.style.backgroundColor ="black";
         }
    }