function getComputerChoice(){
    const arr=["rock","paper","scissors"];
    return arr[getRand(arr.length)];
}
function getRand(max){
    return Math.floor(Math.random()*max);
}
function round(playerselection,computrselection){
    playerselection=playerselection.toLowerCase();
    const res=document.querySelector("#result");
    if(((playerselection==="rock")&&(computrselection==="scissors"))||((playerselection==="paper")&&(computrselection==="rock"))||((playerselection==="scissors")&&(computrselection==="paper")))
        res.textContent="you won!!!";
        
    else if(playerselection===computrselection)
        res.textContent="it's a tie";
    else
        res.textContent="you lost!!!";
}
const res=document.querySelector("#result");
let playerselection="hey";
const btns=document.querySelectorAll(".btn");
btns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        playerselection=btn.id;
        game(playerselection,getComputerChoice())  ;
    })
})


const plsc=document.querySelector("#playersc");
const cpsc=document.querySelector("#computersc");
const p=document.querySelector(".endgametxt");
const end=document.querySelector("#end");
const modal =document.querySelector(".modal")
var plcnt=0;
var cpcnt=0;
modal.classList.remove("show");

function reset(){
    plcnt=0;
    cpcnt=0;
    cpsc.textContent="0";
    res.textContent="";
    plsc.textContent="0";
}
function game(playerselection,computerSelection){
    
    
    round(playerselection,computerSelection);
    if(res.textContent==="you won!!!"){
        plcnt++;
        plsc.textContent=plcnt.toString();
    }
    else if(res.textContent==="you lost!!!"){
        cpcnt++;
        cpsc.textContent=cpcnt.toString();
    }
    if(plcnt===5){
        p.textContent="You won the game!!!";
        modal.classList.toggle("show")
    }
    else if(cpcnt===5){
        p.textContent="The computer won the game!!!";
        modal.classList.toggle("show")
    }
    end.addEventListener("click",(e)=>{
        reset();
        modal.classList.remove("show");
        
    })

        

}
