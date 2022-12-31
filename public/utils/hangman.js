class Game{
  constructor(){
    this.remainingGuesses = 6;
    this.image_num = 0;
    this.correctGuess = false;
    this.guessedLetters= [];
    this.updateGuesses();
    this.getSecretWord();
    this.displaySecretWord();
    
  }

  getSecretWord(){
    this.secretWord = 'I LOVE YOU';
  }

  displaySecretWord(){
    this.secretWordLength = this.secretWord.length;
    this.tempString = ''
    console.log(this.guessedLetters)
    for(let i=0; i<this.secretWordLength; i++){
      
      if(this.guessedLetters.includes(this.secretWord[i])){
        this.tempString = `${this.tempString} ${this.secretWord[i]} `;
      } else if(this.secretWord[i] === ' '){
        this.tempString = `${this.tempString}   \u00A0\u00A0\u00A0  `;
      }else {      
        this.tempString = `${this.tempString} __ `;
      }
    }
    secretWordDisplay.innerText = this.tempString;
  }

  checkGuess(guess){
    if(this.secretWord.includes(guess)){
      this.correctGuess = true;
      this.guessedLetters.push(guess);
      this.displaySecretWord();
    } else{
      this.correctGuess = false;
      this.image_num++;
      this.guessedLetters.push(guess);
      console.log(this.guessedLetters);
      this.setImage();
      console.log('Incorrect!')
      this.deductGuess();
    }
  }

  setImage(){
    hangmanImage.removeAttribute("class");
    hangmanImage.setAttribute("class",`image${this.image_num} mx-auto`);
   }

   deductGuess(){
    if(this.remainingGuesses > 0){
      this.remainingGuesses--;
      this.updateGuesses();
    }
   }

   updateGuesses(){
    remainingGuessesDisplay.innerText = `Remaining Guesses: ${this.remainingGuesses}`;
   }

   buttonPressed(letter){
    
  }
}



const hangmanImage = document.querySelector('#hangman_img');
const remainingGuessesDisplay = document.querySelector('#remainingGuesses');
const letterButtons = document.querySelectorAll('[data-letter]');
const secretWordDisplay = document.querySelector('#secretWord');



letterButtons.forEach(button => {
  button.addEventListener('click',()=>{
    game.checkGuess(button.innerText);
    button.removeAttribute("class");
    if(game.correctGuess){
      button.setAttribute("class",`btn btn-success`);
    } else {
      button.setAttribute("class",`btn btn-danger`);
    }
    
    game.buttonPressed(button);
    
  })
});

remainingGuessesDisplay.addEventListener('click', ()=>{
  console.log(remainingGuessesDisplay.innerText);
})

const game = new Game();


hangmanImage.addEventListener('click',()=>{
  game.image_num++;
  if(game.image_num <= 6){
    game.setImage(game.image_num);
  }else{
    game.setImage(0);
    game.image_num=0;
}
})

