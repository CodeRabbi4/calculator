let display= document.getElementById("display") 

let AC = document.getElementById("allClear");

AC.addEventListener("click",()=>{
    display.value= "";
})
 let delet = document.getElementById("del");
 delet.addEventListener("click",()=>{
   display.value= display.value.toString().slice(0,-1);
});

function calculator(newvalues){
    display.value +=newvalues;
}

let equal = document.getElementsByClassName("equal")[0];
equal.addEventListener("click",()=>{
    display.value= eval(display.value);
    
})