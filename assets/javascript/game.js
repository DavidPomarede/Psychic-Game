
var wins = [0];
var losses = [0];
var lettersChosen = [];
var turns = 9;

var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



    // if(i == 3)
    //     continue;

    // alert(i);

    function rand (alpha) {
	return alpha[Math.floor(Math.random()* alpha.length)];
    };

    var compChoice = rand(alpha);
    console.log(compChoice);

    document.onkeyup = function(event) {

        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        for(var i = 0; i < 9;) {
        if (letter == compChoice) {

            alert("correct", lettersChosen);
            document.getElementById("wins").innerHTML = (wins.length);
            lettersChosen.push(letter);
            document.getElementById("lettersChosen").innerHTML=(lettersChosen);
            (wins+=1);
            i == 5;
    

        }
        else {

            console.log("no", compChoice, letter);
            document.getElementById("losses").innerHTML= (losses.length);
            lettersChosen.push(letter);
            document.getElementById("lettersChosen").innerHTML=(lettersChosen);
            turns--;

            document.getElementById("compChoice").innerHTML=(compChoice);
            i == i++;
        }
        }
        // if (letter == compChoice)
    }
