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
    mainGame(word);
}

function mainGame (word) {
    console.log(word);
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


gameStart();