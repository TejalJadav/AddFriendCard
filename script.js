let btn = document.querySelector(".button"); 
let text = document.querySelector(".text");
let flag = 1;
btn.addEventListener("click",function(){
    if(flag == 1){
        text.innerHTML = "Friends";
        text.style.color = "#000"
        btn.innerHTML ="Remove";
        flag = 0;
    }
    else{
        text.innerHTML = "Stranger";
        text.style.color = "red"
        btn.innerHTML ="Add Friend";
        flag = 1;
    }
         
           
})


