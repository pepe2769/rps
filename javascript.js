const container = document.querySelector(".container")
const scoreDiv = document.querySelector(".results")
scoreDiv.innerText = "player: 0, comp: 0"
const buttons = Array.from(document.querySelectorAll("button"))

function makeClear(string){
    let newString = string.toLowerCase().split("")
    newString[0] = newString[0].toUpperCase()
    return newString.join("")
}
// the name makeClear doesn't really describe the function well

function getComputerChoice(){
    let rockPaperScissors = ["rock", "paper", "scissors"]
    return rockPaperScissors[Math.floor(Math.random() * 3)]
}

function playSingleRound(playerSelection, compSelection){
    const player = playerSelection.toLowerCase()
    const comp = compSelection.toLowerCase()
    return whoWon(player, comp)
}

function whoWon(player, comp){
    if(player == "scissors" && comp == "rock"){
        return `You Lose! ${makeClear(comp)} beats ${makeClear(player)}`
    } else if(player == "scissors" && comp == "paper"){
        return `You Win! ${makeClear(player)} beats ${makeClear(comp)}`
    } else if(player == "rock" && comp == "scissors"){
        return `You Lose! ${makeClear(comp)} beats ${makeClear(player)}`
    } else if(player == "rock" && comp == "paper"){
        return `You Win! ${makeClear(player)} beats ${makeClear(comp)}`
    } else if(player == "paper" && comp == "scissors"){
        return `You Win! ${makeClear(player)} beats ${makeClear(comp)}`
    } else if(player == "paper" && comp == "rock"){
        return `You Lose! ${makeClear(comp)} beats ${makeClear(player)}`
    } else{
        return `You Draw! ${makeClear(player)}, ${makeClear(comp)}`
    }
}

function game (arr, func) {
    let playerScore = 0
    let compScore = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", (e)=> {
            if (playerScore == 5 && compScore == 5) {
                scoreDiv.innerText = "You Draw!"
                return
            } else if (compScore >= 5) {
                scoreDiv.innerText = "You Lose!"
                return
            } else if (playerScore >= 5) {
                scoreDiv.innerText = "You Win!"
            } else {
                let roundResult = func(e.target.innerText, getComputerChoice())
                console.log(roundResult)
                if(roundResult.includes("Win")){
                    playerScore ++
                    scoreDiv.innerText = `player :${playerScore}, comp: ${compScore}`
                } else if(roundResult.includes("Lose")){
                    compScore ++
                    scoreDiv.innerText = `player :${playerScore}, comp: ${compScore}`
                } else {
                    playerScore ++
                    compScore ++
                    scoreDiv.innerText = `player :${playerScore}, comp: ${compScore}`
            }
            }
        })
    }
}

game(buttons, playSingleRound)



