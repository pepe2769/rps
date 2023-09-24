function makeClear(string){
    let newString = string.toLowerCase().split("")
    newString[0] = newString[0].toUpperCase()
    return newString.join("")
}

//the name makeClear doesn't really describe the function well

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

function game(func, compRand){
    let playerScore = 0
    let compScore = 0
    for(let i = 0; i < 5; i ++){
        let player = prompt("what's your choice")
        let comp = compRand()
        let result = func(player, comp)
        console.log(result)
        if(result.includes("Win")){
            playerScore ++
        } else if(result.includes("Lose")){
            compScore ++
        } else {
            playerScore ++
            compScore ++
        }
    }
    (compScore > playerScore) ? console.log(`${playerScore} - ${compScore}, You Lost!!`) :
    (playerScore > compScore) ? console.log(`${playerScore} - ${compScore}, You Win!!`) :
    console.log("It's a Draw!!")
}

game(playSingleRound, getComputerChoice)
