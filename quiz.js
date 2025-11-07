const quesJSON = [
  {
    question: "How many pieces of bun are in a McDonald's Big Mac?",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: "Three",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Which animal is known to spend 90% of its day sleeping?",
    options: ["Koala", "Lion", "Sloth", "Panda"],
    correctAnswer: "Koala",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
];

let score = 0; //this is to keep the score
let currentQuestion = 0;

const totalScore = quesJSON.length;

const questionEl = document.getElementById("question");

const optionEL = document.getElementById("options");

const scoreEl = document.getElementById("score");

const nextEl = document.getElementById('next');

const skipEl = document.getElementById('btn-skip');

const submitEl = document.getElementById('btn-submit');


  //we are here accessing next question

showQuestion();



nextEl.addEventListener("click", () =>{
  scoreEl.textContent = `score : ${score} / ${totalScore}`;
nextQuestion();

} );


skipEl.addEventListener("click", skipQuestion)



function showQuestion() {
  const { correctAnswer, options, question } = quesJSON[currentQuestion]; // destructuring

  questionEl.textContent = question; //since we destructed its called again

  const shuffledOptions = shuffleOptions(options); //we are creating shuffledoptions which is created in the down section

  shuffledOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEL.appendChild(btn);

    //clicking on answer and showing correct one

    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      scoreEl.textContent = `score : ${score} / ${totalScore}`; //shows score its already added html
      nextQuestion();
    });
  });
}

function nextQuestion() {
  currentQuestion++;  //question count increasing 
  optionEL.textContent = " ";  //this is to not append the question to current one
  if(currentQuestion>= quesJSON.length){  //this is too check weather it reached the last point or not
    questionEl.textContent = "quix dpmw";
    nextEl.remove();
    
  }else {
    showQuestion();
  }
}



function submit() {
  
}


//shuffling the options

function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    //we used i = option.lenght-1 to get the last element
    const j = Math.floor(Math.random() * i + 1); //random will get you any random number which is stored in j
    [options[i], options[j]] = [options[j], options[i]]; //we are destrcuting here and changing  options swapping it
  }
  return options;
}
