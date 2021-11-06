//computer part starts here
function playRound() {
    let arr = ["Paper", "Scissors", "Rock"];
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
  
    let comp = getRandomIntInclusive(0, 2);
    console.log(comp);
    let computerSelection = arr[comp];
    console.log(computerSelection);
    //computer part ends here
    //user part starts here
   //=========LISTENING PART
  function userChoice(){
              //FOR ROCK
          let watch="false";
          while(watch=== false){
              let btn = document.querySelector('.rock');
              function rock(){
                  watch=true;
                  return userSel="Rock"
              }
              btn.addEventListener("click", rock)
              
              //FOR PAPER
              let btn1 = document.querySelector('.paper')
              function paper(){
                  watch=true;
                  return userSel="Paper";
              }
              btn1.addEventListener("click", paper);
              
              //FOR SCISSORS
              let btn3 = document.querySelector('.scissors');
              function scissors(){
                  watch=true;
                  return userSel="Scissors";
              }
              btn3.addEventListener('click', scissors);
                              }
  }
    let userSel= userChoice(); // DECLARING THE VARIABLE IN WHICH THE SELECTION WILL BE STORED
  
  
  // Now we call it 
    console.log("user selection "+userSel);
    //I will convert any imput into something that can be compared
    function formatUserSel(arg) {
      return arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();
    }
    let userSelection = formatUserSel(userSel);
    console.log(userSelection);
    // user part ends here.
    //actual selection match starts here
    if (userSelection === computerSelection) {
      alert("Draw");
      return "Draw";
    } else if (
      (userSelection === "Rock" && computerSelection === "Scissors") ||
      (userSelection === "Scissors" && computerSelection === "Paper") ||
      (userSelection === "Paper" && computerSelection === "Rock")
    ) {
      alert(
        `You chose ${userSelection} and computer says ${computerSelection}. You Win!`
      );
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
    } else {
      alert("Typo error, Try again as suggested");
      return "Typo";
    }
  }
  //the returned values will be passed on to the game function
  //the function is just stated, will not run unless called (like below)
  function game() {
    let wincount = 0;
    let losecount = 0;
    let drawcount = 0;
    let typocount = 0;
    for (let i = 0; i < 5; i++) {
      let winLose = playRound(); //computer selection is ran
  
      switch (winLose) {
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
    }
  
    if (wincount === losecount) {
      alert(`No one Wins. No tamales
          wins +${wincount}
          lost -${losecount} 
          draws ${drawcount}
          typos ${typocount} `);
    } else if (wincount > losecount) {
      alert(`You won ${wincount} times, Felicidades! Pase por Su Tamal.
          wins +${wincount}
          lost -${losecount} 
          draws ${drawcount}
          typos ${typocount}`);
    } else if (losecount > wincount) {
      alert(`Computer won ${losecount} times. You lose! You owe it a DOLLAR!
          wins +${wincount}
          lost -${losecount} 
          draws ${drawcount}
          typos ${typocount}`);
    }
  }
  game();
  