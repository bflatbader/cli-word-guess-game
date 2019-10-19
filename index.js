// PACKAGES
var inquirer = require('inquirer');
var chalk = require('chalk');
var Word = require('./word');

// FUNCTIONS
function gameStart () {
    // The user gets 8 incorrect guesses before losing the game
    var numGuesses = 8;
    
    // Generate random number between 0 and the number of words in the word bank
    var rand = Math.floor(Math.random() * wordBank.length);

    // Pick a word from the word bank, based on the random number
    randWord = wordBank[rand];

    var word = new Word (randWord);
    console.log("\n===================================");
    mainGame(word, randWord);
}

function mainGame (word, randWord) {

    // Used to store an array of the letters in the word
    var letterArray = [];
    // Used to store the boolean values for each letter in the word to determine if it has been guessed or not
    var guessArray = [];
    
    // Displays the word to guess as underscores
    console.log("\n" + chalk.hex('#70D6FF')("WHO'S THAT POKÉMON?\n") + word.createString() + "\n");

    inquirer
    .prompt([
        {
            name: "guessedLetter",
            message: "Guess a letter:",
            validate: function validateGuess(name) {
                if (!name.match(alphabet)) {
                    return chalk.red("Please only enter a letter.");
                } else {
                    return true;
                }
            }
        }
    ]).then(function (answer) {
        // Converts the guessed letter to lower case and then passes it to the word's checkGuessWord method
        lowerGuess = answer.guessedLetter.toLowerCase();
        word.checkGuessWord(lowerGuess);

        word.letters.forEach(function (element) {
            letterArray.push(element.letter);
            guessArray.push(element.guessed);
        });

        if (letterArray.indexOf(lowerGuess) > -1) {
            console.log(chalk.hex('#AEFF70')("\nCORRECT!!!"));
        } else {
            console.log(chalk.hex('#FF7070')("\nIncorrect!"));
            numGuesses--;
            console.log(chalk.hex('#FF9770')(`You have ${numGuesses} guesses remaining.`));
        }

        // Determine if game will continue or not
        if (guessArray.indexOf(false) > -1 && numGuesses > 0) {
            mainGame(word, randWord);
        } else {

            // If the number of guesses left is 0 then the user lost, otherwise they won
            if (numGuesses === 0) {
                console.log("\n" + chalk.hex('#D85F5F')("You lose.\n"));
                console.log("The Pokémon was " + chalk.blue(`${randWord}`) + ".\n");
            } else {
                console.log("\n" + chalk.hex('#7FD140')("You got it right!\n"))
                console.log("The Pokémon was " + chalk.blue(`${randWord}`) + ".\n");
            }
        
            
            inquirer
            .prompt([
                {
                    name: 'action',
                    type: 'list',
                    message: 'What would you like to do?',
                    choices: ['Play again','Exit']
                }
            ]).then(function (answer) {
                if (answer.action === 'Play again') {
                    numGuesses = 8;
                    gameStart();
                } else {
                    process.exit();
                }
            });

        }
    });
}

// VARIABLES
// Original 151 pokemon - minus Farfetch'd and Mr. Mime because of the weird characters
var wordBank = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon",
"charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree",
"weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate",
"spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash",
"nidorina","nidoqueen","nidoran","nidorino","nidoking","clefairy",
"clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat",
"oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett",
"dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe",
"arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop",
"machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel",
"geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite",
"magneton","doduo","dodrio","seel","dewgong","grimer","muk","shellder",
"cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler",
"voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan",
"lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan",
"horsea","seadra","goldeen","seaking","staryu","starmie","scyther","jynx","electabuzz",
"magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon",
"jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl",
"snorlax","articuno","zapdos","moltres","dratini","dragonair","dragonite","mewtwo","mew"];
var alphabet = /[a-zA-z]/;
var numGuesses = 8;

gameStart();