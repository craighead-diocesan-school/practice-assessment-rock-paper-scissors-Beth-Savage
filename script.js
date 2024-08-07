function paperScissorsRock() {
  //Gives options for the computer to use and outputs the purpose of the code
  let answerOptions = ["rock", "paper", "scissors"]
  alert("We are going to play paper scissors rock. We will do best out of 3")
  //Creates the variables and there values before they come up and changed in later code
  let roundNumber = 1
  let computersChoice = ""
  let usersChoice = ""
  let computerScore = 0
  let usersScore = 0
  //The while will make the code repeat until all rounds are over
  while (roundNumber <= 3) {
    //The computer picks a random output from the array above
    let index = Math.floor(Math.random() * 3)
    computersChoice = answerOptions[index]
    //Askes the user what they want to play and turnsi it into a lower case to prevent errors in the code
    usersChoice = prompt("Input your choice of paper, scissors or rock")
    usersChoice = usersChoice.toLowerCase()
    alert("I chose: " + computersChoice + " You chose: " + usersChoice)
    //Compares the users and computers input and outputs a message accordingly then adds a number to the score and the round counter. If there is a tie or something goes wrong then there will be nothing added to the round counter or the scores
    if (computersChoice == usersChoice) {
      alert("It was a tie, we will try again")
    } else if ((computersChoice == "scissors" && usersChoice == "rock") || (computersChoice == "rock" && usersChoice == "paper") || (computersChoice == "paper" && usersChoice == "scissors")) {
      alert("You won this round")
      roundNumber = roundNumber + 1
      usersScore = usersScore + 1
    } else if ((computersChoice == "rock" && usersChoice == "scissors") || (computersChoice == "scissors" && usersChoice == "paper") || (computersChoice == "paper" && usersChoice == "rock")) {
      alert("You lost this round")
      roundNumber = roundNumber + 1
      computerScore = computerScore + 1
    } else {
      alert("Something went wrong please try again")
    }
  }
  //Compares the scores and outputs who won with a small message
  if (computerScore > usersScore) {
    alert("I won, good game")
  } else if (computerScore < usersScore) {
    alert("You won, play again?")
  }
}
