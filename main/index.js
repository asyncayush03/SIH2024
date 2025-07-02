let timer = 60;
let ran = "";
let scoreval = 0;
let elevalue ="";
 
function increaseScore(){
    scoreval+=10;
    document.querySelector(".score").textContent= scoreval;
}
function decreaseScore(){
    scoreval-=10;
    document.querySelector(".score").textContent= scoreval;
}

function getNewHit(){
    ran = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = ran;
}


function makeBubble(){
    let bubble = "";

for(let i = 1; i <=150; i++) {
    let random = Math.floor(Math.random() * 10);
    bubble += `<div id="elem">${random}</div>`;
}

document.querySelector(".pbottom").innerHTML = bubble;

}
 
function runTimer(){
    let timerint = setInterval(function(){
     if(timer>0)
    {  timer--;
       document.querySelector(".timer").innerHTML = timer;
    }
    else 
    {clearInterval(timerint);
        gameover();
    }

    },1000);
}
  document.querySelector(".pbottom").addEventListener("click",function(value){
 elevalue = Number(value.target.textContent);
 if(elevalue === ran)
 {
    increaseScore();
    getNewHit();
    makeBubble();
 }
 else{
    if(scoreval>0)
    {
       decreaseScore();
    }
 }
});
function gameover(){
    document.querySelector(".pbottom").innerHTML= ` <div class="gameover">
    <div id="button">
        <div id="over">
      <h1>your Score :  ${scoreval}</h1>
    </div>
     <button id="btn">Start</button>
     <button id="btn">Back</button>
    </div>
</div>`;
    document.querySelector("#btn").addEventListener("click",function(event){
        if(event.target.id === "btn")
        {
            scoreval=0;
            timer= 60;
            document.querySelector(".score").textContent = scoreval;
        }
    getNewHit();
    runTimer();
   makeBubble();    
});
}

getNewHit();
runTimer();
makeBubble();
