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
        alert("Type in as suggested. It is case sensitive");
        return "none"
    }
}

function game(){

    for(let i=0;i<=5; i++){
        let winLose = playRound();
        console.log(winLose);
        
    }
}
game();