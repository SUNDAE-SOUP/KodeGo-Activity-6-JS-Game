var Rock = document.getElementById("Prock");
var Paper = document.getElementById("Ppaper");
var Scissor = document.getElementById("Pscissor");
var resultOutput = document.getElementById("result");
var playerImage = document.getElementById("playerImage");
var botImage = document.getElementById("botImage");
var resultFinal = document.getElementById("resultFinal");


var playerScore = 0;
var botScore = 0;

var playerScoreElem = document.getElementById("Pscore");
var botScoreElem = document.getElementById("Bscore");


Rock.addEventListener("click", function() {
    hands = "Rock";
});
Paper.addEventListener("click", function() {
    hands = "Paper";
});
Scissor.addEventListener("click", function() {
    hands = "Scissor";
});


function pick() {
    var choices = ["Rock", "Paper", "Scissor"];
    var botChoice = choices[Math.floor(Math.random() * 3)];

    var result;
    if (hands === "Rock") {
        if (botChoice === "Rock") {
            result = "Draw -_-";
        }
        else if (botChoice === "Paper") {
            result = "Bot wins! T_T";
            botScore++;
        }
        else {
            result = "You win! :D";
            playerScore++;
        }
    }
    else if (hands === "Paper") {
        if (botChoice === "Paper") {
            result = "Draw -_-";
        }
        else if (botChoice === "Scissor") {
            result = "Bot wins! T_T";
            botScore++;
        }
        else {
            result = "You win! :D";
            playerScore++;
        }
    }
    else if (hands === "Scissor") {
        if (botChoice === "Scissor") {
            result = "Draw -_-";
        }
        else if (botChoice === "Rock") {
            result = "Bot wins! T_T";
            botScore++;
        }
        else {
            result = "You win! :D";
            playerScore++;
        }
    }
    
    resultOutput.innerHTML = "You chose " + hands + ". The Bot chose " + botChoice + ". ";
    resultFinal.innerHTML = result;
    
    playerScoreElem.innerHTML = playerScore;
    botScoreElem.innerHTML = botScore;

    if (hands === "Rock") {
        playerImage.src = "player-rock.png";
    }
    if (hands === "Paper") {
        playerImage.src = "player-paper.png";
    }
    if (hands === "Scissor") {
        playerImage.src = "player-scissor.png";
    }
    if (botChoice === "Rock") {
        botImage.src = "bot-rock.png";
    }
    if (botChoice === "Paper") {
        botImage.src = "bot-paper.png";
    }   
    if (botChoice === "Scissor") {
        botImage.src = "bot-scissor.png";
    }

    botChoice = playerImage + "player.png";
    
}

