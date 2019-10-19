var Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;

    // Method to check whether the letter has been guessed or not and displays either a _ if not, or the correctly guessed letter
    this.displayLetter = function () {
        if (this.guessed) {
            return this.letter + " ";
        } else {
            return "_ ";
        }
    }

    this.checkGuess = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    }
}

// Export the Letter constructor for use in Word.js
module.exports = Letter;