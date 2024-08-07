function paperScissorsRock() {
  let answerOptions = ["rock", "paper", "scissors"]
  alert("We are going to play paper scissors rock. We will do best out of 3")
  let roundNumber = 1
  let computersChoice = ""
  let usersChoice = ""
  let computerScore = 0
  let usersScore = 0
  while (roundNumber <= 3) {
    let index = Math.floor(Math.random() * 3)
    computersChoice = answerOptions[index]
    usersChoice = prompt("Input your choice of paper, scissors or rock")
    usersChoice = usersChoice.toLowerCase()
    alert("I chose: " + computersChoice + " You chose: " + usersChoice)
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
  if (computerScore > usersScore) {
    alert("I won, good game")
  } else if (computerScore < usersScore) {
    alert("You won, play again?")
  }
}
