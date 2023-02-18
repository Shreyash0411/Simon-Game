let start = true;
let color = ["blue","red","green","yellow"];
let store = [];
let level = 0;

document.addEventListener("keypress",function(event){
    if(event.key == 'Enter' && start == true)
    {
        start = false;
        gamePattern();
    }
})


function gamePattern()
{
    let choice = Math.floor(Math.random()*4);
    makeSound(color[choice]);
    makeAnimation(color[choice]);

    store.push(color[choice]);
    document.querySelector("h1").innerHTML = " Level " + ++level;  
    setTimeout(function(){
        document.getElementById(color[choice]).classList.remove("onPress");
    },200);
}

function makeSound(color)
{
    switch(color)
    {
        case "blue":
            let blueButton = new Audio("sounds/blue.mp3");
            blueButton.play();
            break;

        case "red":
            let redButton = new Audio("sounds/red.mp3");
            redButton.play();
            break;

        case "green":
            let greenButton = new Audio("sounds/green.mp3");
            greenButton.play();
            break;

        case "yellow":
            let yellowButton = new Audio("sounds/yellow.mp3");
            yellowButton.play();
            break;
    }

}

function makeAnimation(color)
{
    let activatedButton = document.querySelector("#"+color)
    
    activatedButton.classList.add("onPress");

    setTimeout(function(){
        activatedButton.classList.remove("onPress")
    },300);
}

let i = 0;
function game()
{
    if(document.activeElement.id == store[i])
    {
        if(i == store.length-1)
        {
            makeSound(store[i]);
            makeAnimation(store[i]);
            i=0;
            setTimeout(gamePattern,1000);              
        }
        else
        {
            makeSound(store[i]);
            makeAnimation(store[i]);
            i++;
        }
    }
    else{
        setInterval(function(){
            let wrongs = new Audio("./sounds/wrong.mp3");
            wrongs.play();
        },300);
        window.location.reload();
    }

    return;
}