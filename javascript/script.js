function playRound(){
let arr=["Paper","Scissors","Rock"];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

let comp = getRandomIntInclusive(0, 2);
console.log(comp);
let computerSelection = arr[comp];
console.log(computerSelection);

let userSel = prompt("Type in Rock or Paper or Scissors", "Type exactly as suggested");
console.log(userSel);
//I will convert any imput into something that can be compared
function formatUserSel(arg){
return arg.charAt(0).toUpperCase()+arg.slice(1).toLowerCase(); 
}
let userSelection = formatUserSel(userSel);
console.log(userSelection);
//Ends here.

if(userSelection===computerSelection)
    {
        alert("Draw");
        return "Draw"
    }
    else if(userSelection==="Rock" && computerSelection==="Scissors" || userSelection==="Scissors" && computerSelection==="Paper" ||
    userSelection==="Paper" && computerSelection==="Rock")
    {
        alert(`You chose ${userSelection} and computer says ${computerSelection}. You Win!`);
        return "Win";
    }
    else if(userSelection==="Rock" && computerSelection==="Paper" || userSelection==="Scissors" && computerSelection==="Rock" ||
    userSelection==="Paper" && computerSelection==="Scissors")
    {
        alert(`You chose ${userSelection} and computer says ${computerSelection}. You Lose!`);
        return "Lose";
    }
    else{
        alert("Typo error, Try again as suggested");
        return "Typo"
    }
}

function game(){
    let wincount=0;
    let losecount=0;
    let drawcount=0;
    let typocount=0;
    for(let i=0;i<5; i++){
        let winLose=playRound();
        
        switch(winLose){
            case "Win":
                wincount++;
                break;    
            case "Lose":
                losecount++;
                break;
            case "Draw":
                drawcount++;
                break;
            case "Typo":
                typocount++;
                break;
        }
        console.log("wins "+wincount);
        console.log("loss "+losecount); 
        console.log("draws "+drawcount);
        console.log("typos " + typocount);  
    }
    
    if(wincount===losecount){
        alert("No one Wins");
    }
    else if(wincount>losecount){
        alert(`You won ${wincount} times, You're the winner`)
    }
    else if (losecount<wincount){
        alert(`Computer won ${losecount} times. You lose`)
    }

}
game();