var Letter = require('./letter');

var Word = function (word) {

    // Create empty letters array
    this.letters = [];

    // Push spaces and create Letter objects for each char in the word
    for(i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            this.letters.push(" ");
        } else {
            this.letters.push(new Letter(word[i]));
        }
    }

    this.createString = function () {
        var wordString = "";

        this.letters.forEach(function(element) {
            if (element === " ") {
                wordString += " ";
            } else {
                wordString += element.displayLetter();
            }
        });
        
        return wordString;
    }

    this.checkGuessWord = function (letterGuess) {
        this.letters.forEach(function(element) {
            if (element.letter !== undefined) {
                element.checkGuess(letterGuess);
            }
        });
    }
}

// Export the Word constructor for use in index.js
module.exports = Word;