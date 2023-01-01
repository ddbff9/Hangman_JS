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
    this.secretWord = randomWords[Math.floor(Math.random()*500)].toUpperCase();
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
      if(this.image_num < 6){
        this.image_num++;
      }
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
}



const hangmanImage = document.querySelector('#hangman_img');
const remainingGuessesDisplay = document.querySelector('#remainingGuesses');
const letterButtons = document.querySelectorAll('[data-letter]');
const secretWordDisplay = document.querySelector('#secretWord');

var api = 'https://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';


letterButtons.forEach(button => {
  button.addEventListener('click',()=>{
    game.checkGuess(button.innerText);
    button.removeAttribute("class");
    if(game.correctGuess){
      button.setAttribute("class",`btn btn-success disabled`);
    } else {
      button.setAttribute("class",`btn btn-danger disabled`);
    }
  })
});

remainingGuessesDisplay.addEventListener('click', ()=>{
  console.log(remainingGuessesDisplay.innerText);
})

const randomWords = [
  "arrow",
  "browserling",
  "engineer",
  "pocket",
  "wave",
  "no",
  "cover",
  "can",
  "eat",
  "duty",
  "green",
  "learn",
  "against",
  "desert",
  "roar",
  "examine",
  "everything",
  "accident",
  "you",
  "complex",
  "oldest",
  "all",
  "class",
  "wire",
  "fed",
  "continent",
  "pretty",
  "history",
  "glad",
  "to",
  "wood",
  "ten",
  "standard",
  "manner",
  "child",
  "thing",
  "wing",
  "valuable",
  "hunter",
  "forty",
  "verb",
  "became",
  "straw",
  "having",
  "cent",
  "railroad",
  "job",
  "having",
  "brass",
  "club",
  "opportunity",
  "recently",
  "locate",
  "sort",
  "officer",
  "soft",
  "wrote",
  "part",
  "similar",
  "pack",
  "contrast",
  "during",
  "arrangement",
  "keep",
  "field",
  "rear",
  "visitor",
  "clearly",
  "boy",
  "tea",
  "drove",
  "fifteen",
  "quick",
  "pleasant",
  "addition",
  "first",
  "rice",
  "beneath",
  "lift",
  "remarkable",
  "captain",
  "battle",
  "fight",
  "thread",
  "friendly",
  "listen",
  "sheep",
  "funny",
  "pretty",
  "door",
  "right",
  "lunch",
  "took",
  "play",
  "farmer",
  "band",
  "clay",
  "full",
  "tune",
  "mostly",
  "shallow",
  "related",
  "charge",
  "white",
  "type",
  "attention",
  "hunter",
  "way",
  "bee",
  "wood",
  "exciting",
  "castle",
  "development",
  "close",
  "you",
  "none",
  "bread",
  "glad",
  "hold",
  "combination",
  "hall",
  "area",
  "dig",
  "fourth",
  "pot",
  "clay",
  "mother",
  "middle",
  "hurried",
  "triangle",
  "relationship",
  "structure",
  "cheese",
  "done",
  "mad",
  "neck",
  "once",
  "center",
  "tall",
  "compound",
  "mouth",
  "send",
  "once",
  "support",
  "camp",
  "bend",
  "setting",
  "such",
  "personal",
  "cost",
  "game",
  "week",
  "apart",
  "engine",
  "main",
  "usual",
  "spoken",
  "recently",
  "television",
  "surface",
  "came",
  "pleasant",
  "dug",
  "driving",
  "advice",
  "mile",
  "castle",
  "activity",
  "seven",
  "met",
  "birth",
  "design",
  "sum",
  "pipe",
  "ruler",
  "danger",
  "drop",
  "owner",
  "broken",
  "bend",
  "differ",
  "week",
  "area",
  "taken",
  "clothes",
  "fair",
  "active",
  "blanket",
  "sets",
  "eight",
  "lower",
  "library",
  "saved",
  "worth",
  "summer",
  "spider",
  "guess",
  "same",
  "drew",
  "library",
  "composed",
  "silent",
  "loss",
  "society",
  "into",
  "art",
  "military",
  "age",
  "neck",
  "ability",
  "familiar",
  "correctly",
  "chapter",
  "merely",
  "forgot",
  "needed",
  "noted",
  "deeply",
  "stronger",
  "negative",
  "fence",
  "unless",
  "future",
  "may",
  "welcome",
  "choose",
  "numeral",
  "snow",
  "ruler",
  "nobody",
  "surprise",
  "magic",
  "helpful",
  "income",
  "cookies",
  "half",
  "warn",
  "they",
  "slow",
  "tape",
  "shorter",
  "actual",
  "steel",
  "company",
  "wet",
  "mixture",
  "alive",
  "saddle",
  "below",
  "complex",
  "species",
  "factor",
  "spite",
  "nothing",
  "consonant",
  "rabbit",
  "sport",
  "warn",
  "weather",
  "joy",
  "fine",
  "useful",
  "born",
  "look",
  "somehow",
  "shorter",
  "chest",
  "spent",
  "poetry",
  "leather",
  "giving",
  "why",
  "over",
  "earth",
  "circle",
  "blew",
  "bad",
  "eaten",
  "shade",
  "given",
  "voyage",
  "put",
  "history",
  "pretty",
  "rain",
  "worried",
  "lay",
  "as",
  "you",
  "route",
  "mile",
  "various",
  "table",
  "practical",
  "press",
  "safety",
  "court",
  "subject",
  "donkey",
  "struck",
  "soft",
  "recent",
  "art",
  "someone",
  "locate",
  "he",
  "sing",
  "trade",
  "understanding",
  "steady",
  "yellow",
  "region",
  "social",
  "ordinary",
  "direction",
  "someone",
  "gone",
  "spirit",
  "arrive",
  "gently",
  "winter",
  "air",
  "greater",
  "against",
  "putting",
  "ship",
  "draw",
  "such",
  "brush",
  "face",
  "compass",
  "action",
  "from",
  "during",
  "better",
  "slightly",
  "moon",
  "fed",
  "teeth",
  "state",
  "capital",
  "gain",
  "notice",
  "dark",
  "curious",
  "see",
  "life",
  "protection",
  "low",
  "turn",
  "nice",
  "needed",
  "upper",
  "behind",
  "attached",
  "hour",
  "wet",
  "bigger",
  "attack",
  "involved",
  "grabbed",
  "speed",
  "add",
  "sure",
  "attack",
  "atmosphere",
  "roof",
  "does",
  "managed",
  "happily",
  "slabs",
  "waste",
  "automobile",
  "mistake",
  "thrown",
  "our",
  "pass",
  "like",
  "invented",
  "sing",
  "become",
  "dress",
  "similar",
  "might",
  "slept",
  "sun",
  "anybody",
  "worker",
  "slide",
  "till",
  "club",
  "chance",
  "parts",
  "sea",
  "press",
  "pictured",
  "earn",
  "dear",
  "letter",
  "way",
  "surrounded",
  "between",
  "disease",
  "must",
  "proper",
  "crew",
  "element",
  "herd",
  "table",
  "whom",
  "slave",
  "middle",
  "congress",
  "scale",
  "ground",
  "giant",
  "depth",
  "key",
  "pilot",
  "field",
  "queen",
  "planned",
  "type",
  "slow",
  "bicycle",
  "to",
  "family",
  "magnet",
  "arrange",
  "money",
  "easily",
  "drawn",
  "surface",
  "car",
  "choice",
  "flag",
  "involved",
  "molecular",
  "newspaper",
  "heat",
  "sale",
  "rubbed",
  "far",
  "grade",
  "unhappy",
  "jar",
  "real",
  "driven",
  "split",
  "rise",
  "former",
  "blue",
  "independent",
  "single",
  "by",
  "lonely",
  "tide",
  "eye",
  "made",
  "star",
  "rope",
  "at",
  "fierce",
  "able",
  "strength",
  "adult",
  "cabin",
  "every",
  "seen",
  "hair",
  "somebody",
  "birds",
  "bit",
  "breath",
  "leaving",
  "local",
  "actually",
  "work",
  "itself",
  "us",
  "water",
  "phrase",
  "chosen",
  "salmon",
  "folks",
  "effort",
  "primitive",
  "plate",
  "storm",
  "fifteen",
  "provide",
  "black",
  "specific",
  "feel",
  "find",
  "not",
  "single",
  "indicate",
  "volume",
  "president"
]

const game = new Game();