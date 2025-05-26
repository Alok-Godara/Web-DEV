let button = document.querySelector("button");
console.log(button);

let bgColor = "light";

function changeMode () {
    console.log("You are trying to chnage mode.")
    if(bgColor === "light"){
        bgColor = "dark";
        document.body.style.backgroundColor = "grey";
        
    }
    else if(bgColor === "dark"){
        bgColor = "light";
        document.body.style.backgroundColor = "wheat";
    }
    console.log(bgColor);
};

button.addEventListener("click" , changeMode);