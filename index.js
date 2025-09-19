let p1choice = document.getElementById("p1coice")
let p2choice = document.getElementById("p2coice")


let imgp1 = document.getElementById("imgp1");
let imgp2 = document.getElementById("imgp2");

let arr = ["stone","paper","scissor"];

function getRandomNumber() //function to generate random number from 0 to 2
{
    return Math.floor(Math.random() * 3);  
}



let play_button = document.getElementById("play_button");

play_button.addEventListener("click", ()=>{

    p1choice.innerHTML= arr[getRandomNumber()];
    p2choice.innerHTML= arr[getRandomNumber()];

    let res = document.getElementById("res");

    //CONDITIONS TO DISPLAY RESULT
    if(p1choice.innerHTML==="stone" && p2choice.innerHTML==="stone"){
        res.innerHTML="The Match is Draw";

        imgp1.src = "./stone image.png";
        imgp2.src = "./stone image.png";
    }

    else if(p1choice.innerHTML==="stone" && p2choice.innerHTML==="paper"){
        res.innerHTML="P2 Won the Match";

        imgp1.src = "./stone image.png";
        imgp2.src = "./paper image.png";
    }

    else if(p1choice.innerHTML==="stone" && p2choice.innerHTML==="scissor"){
        res.innerHTML="P1 Won the Match";

        imgp1.src = "./stone image.png";
        imgp2.src = "./scissor image.png";
    }

    else if(p1choice.innerHTML==="paper" && p2choice.innerHTML==="stone"){
        res.innerHTML="P1 Won the Match";

        imgp1.src = "./paper image.png";
        imgp2.src = "./stone image.png";
    }

    else if(p1choice.innerHTML==="paper" && p2choice.innerHTML==="paper"){
        res.innerHTML="The Match is Draw";

        imgp1.src = "./paper image.png";
        imgp2.src = "./paper image.png";
    }

    else if(p1choice.innerHTML==="paper" && p2choice.innerHTML==="scissor"){
        res.innerHTML="P2 Won the Match";

        imgp1.src = "./paper image.png";
        imgp2.src = "./scissor image.png";
    }

    else if(p1choice.innerHTML==="scissor" && p2choice.innerHTML==="stone"){
        res.innerHTML="P2 Won the Match";

        imgp1.src = "./scissor image.png";
        imgp2.src = "./stone image.png";
    }

    else if(p1choice.innerHTML==="scissor" && p2choice.innerHTML==="paper"){
        res.innerHTML="P1 Won the Match";

        imgp1.src = "./scissor image.png";
        imgp2.src = "./paper image.png";
    }

    else  // scissor-scissor
    {
        res.innerHTML="The Match is Draw";

        imgp1.src = "./scissor image.png";
        imgp2.src = "./scissor image.png";
    }

})