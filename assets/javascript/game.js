
var wins = [0];
var losses = [0];
var lettersChosen = [];
var turns = 9;

var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];




function rand (alpha) {
	return alpha[Math.floor(Math.random()* alpha.length)];
};

var compChoice = rand(alpha);
console.log(compChoice);

document.onkeyup = function(event) {

        var userGuess = event.key;

        var computerGuess = alpha[Math.floor(Math.random() * alpha.length)];
                    
        if (alpha.indexOf(userGuess) > -1) {

            if (userGuess === compChoice) {  
                wins++;
                alert("you guessed right: " + userGuess );
                turns = 9;
                lettersChosen = [];
                compChoice = rand(alpha);
                console.log("comp guess again: " + compChoice)
            }

            if (userGuess != compChoice) {
                turns --;
                lettersChosen.push(userGuess);
            }

            if (turns === 0) {            
                turns = 9;
                losses ++;
                lettersChosen = [];
                alert("out of guesses");
                compChoice = rand(alpha);
                console.log("comp guess again2: " + compChoice)                
            }   
        

        document.querySelector("#wins").innerHTML = "wins: " + wins;
        document.querySelector("#losses").innerHTML = "losses: " + losses;
        document.querySelector("#turns").innerHTML = "turns: " + turns;
        document.querySelector("#lettersChosen").innerHTML = "already chosen: " + lettersChosen;


        
        }
    };