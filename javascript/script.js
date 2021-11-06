let userSelection;
let wincount = 0;
let losecount = 0;
let drawcount = 0;
let btn = document.querySelector(".rock");
    function rock(){
      console.log("Hi I return Rock");
      userSelection="Rock";
      playRound();
    }
    btn.addEventListener("click", rock);

let btn2 = document.querySelector(".paper");
    function paper(){
      console.log("Hi I return Paper");
      userSelection="Paper";
      playRound();
    }
    btn2.addEventListener("click", paper)

let btn3 = document.querySelector(".scissors");
    function scissors(){
      console.log("Hi I return Scissors");
      userSelection="Scissors";
      playRound();
    }
    btn3.addEventListener("click", scissors);

  function playRound(){
    let arr = ["Paper", "Scissors", "Rock"];
        function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
        }
        let comp = getRandomIntInclusive(0, 2);
        console.log(comp);
    let computerSelection = arr[comp];
        console.log("computer: "+computerSelection);
        console.log("user: " + userSelection);
      // So far we have both user and computer selections
      //now we proceed to compare them and count who wins
      function compare(){
          if (userSelection === computerSelection) {
            /* alert("No one wins/Draw"); */
            return "Draw";
          } else if (
            (userSelection === "Rock" && computerSelection === "Scissors") ||
            (userSelection === "Scissors" && computerSelection === "Paper") ||
            (userSelection === "Paper" && computerSelection === "Rock")
          ) {
            /* alert(
              `You chose ${userSelection} and computer says ${computerSelection}. You Win!`
            ); */
            return "Win";
          } else if (
            (userSelection === "Rock" && computerSelection === "Paper") ||
            (userSelection === "Scissors" && computerSelection === "Rock") ||
            (userSelection === "Paper" && computerSelection === "Scissors")
          ) {
            /* alert(
              `You chose ${userSelection} and computer says ${computerSelection}. You Lose!`
            ); */
            return "Lose";
          }
        }
      let returnedValue =compare();
      switch(returnedValue){
        case "Win":{wincount++;
          let userwins = document.querySelector('.userwin');
          userwins.innerHTML=`<p>You Won ${wincount} times!</p>`;
          break;}
        case "Lose":{losecount++;
          let cpuwin = document.querySelector('.cpuwin');
          cpuwin.innerHTML=`You Lose ${losecount} times`;
          break;}
        case "Draw":{drawcount++;
          let draw = document.querySelector('.draw');
          draw.innerHTML=`Daw ${drawcount} times`;
          break;
          break;}
      }
console.log("wincount "+wincount);
console.log("losecount "+ losecount);
console.log("draw "+ drawcount);

function winner(){
  if(wincount===5){
    let won = document.querySelector('.result');
    won.innerHTML="YOU WON FIVE TIMES";
    won.style.color="blue";
     ;}
   else if(losecount===5){let loses = document.querySelector('.result');
   loses.innerHTML="COMPUTER WON FIVE TIMES";
   loses.style.color="red";
}
}
winner();
  }