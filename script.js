const pass1=document.querySelector("#pass1");
const pass2=document.querySelector("#pass2");
const errorMessage=document.querySelector(".errorMessage");

function passwordCheck(){
    if (pass1.value!=pass2.value){
        pass1.classList.add("error")
        pass2.classList.add("error")
        errorMessage.classList.add("error")
    }
    else{
        pass1.classList.remove("error")
        pass2.classList.remove("error")
        errorMessage.classList.remove("error")
    }
}
pass1.addEventListener("input",passwordCheck);
pass2.addEventListener("input",passwordCheck);