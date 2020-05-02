$(document).ready(function() {
    console.log("ready")


    //these are the event listeners for the UI; having a timer, also having two onclick listeners 
    //on the document its self. 
   
    // setting up some variables, and an object within the vriable for the questions
    let player = {
        isPlaying: false,
        isWaiting: false,
        correctAnswers: 0,
        incorrectAnswers: 0,
        missedAnswer: 0,
        wins: 0,
        losses: 0,
    }
    let trivQuestions = [
        {
            Question : "Yoda is how old in the Return of The Jedi?",
        Ansers:{ 
                A: "700 years old", 
                B: "800 years old", 
                C: "900 years old", 
                D: "1100 years old",
            },
            correctAnswer: "C: 900 Years Old"
        },
        {Question : "Luke wanted to get what from Tosche Station?",
        Answers:{   
                A: "Power Couplings", 
                B: "Power Converters", 
                C: "Droid Inhibitor", 
                D: "Lightsaber"
            },
            correctAnswer: "B"
        },
           {Question: "Anakin is what as a child?",
           Ansers:{
                A: "A Jedi", 
                B: "A Store Owner", 
                C: "A Pilot", 
                D: "A Slave",
           },
           correctAnswer: "D: A Slave"
        },
            {Question: "Obi Wan Kenobi is called what by Princess Leia?",
            Answers:{
                A: "An Old Goat", 
                B: "General Kenobi", 
                C: "Ben Kenobi", 
                D: "The Negotiator"
            },
            correctAnswer: "B: General Kenobi"
        },
            {Question: "Who is pursuing the Rebel Blockade Runner in Episode IV?",
            Answers:{
                A: "Darth Vader", 
                B: "Darth Maul", 
                C: "Darth Tyranus", 
                D: "Darth Bane" 
            },
            correctAnswer: "A: Darth Vader"            
                    },
    ] // this is going to be an array of questions held here
    let score = 0;
    let gameStatus = [];
    let currentQuestion = 0;
    let questionNumber = 0;
    let wins = 0;
    //further global vairables for the quiz
    const quizContainer = document.getElementById('formQuiz')
    const resultsConatiner = document.getElementById('quizResults')
    const submitButton = document.getElementById('submit')


    //this is the timer for the game, where timer is the js timer; and time is the actual game time
    let timer = 60;
    let timeOut = 1000 * 5;
    let timedOut = false;
    let isCorrect = false;
    let inervalId;
    let timerRunning = false
    let i = 0;


    startGame();


    // function startGame(){
    //     // $('#startGame').on('click', function(playerInitilization) {
        //     player.isPlaying = !player.isPlaying
        //     gameStatus= []
        //     player.correctAnswers = 0;
        //     player.incorrectAnswers = 0;
        //     trivQuestions = createTrivQuestions();
        // })
        // console.log('startGame is ready')
        
        const output = []
        

        //this is a for loop to cycle through the questions
           trivQuestions.forEach((currentQuestion, questionNumber => { const Answers = []
                for (letter in currentQuestion.Answers){
                    //this will add an HTML radio button
                    Answers.push(
                        <label>
                            <input type="radio" name="questions${questionsNumber}" value="${letter)"></input>
                            ${letter}:
                            ${currentQuestion.Answers[letter]}
                        </label>
                    );
                }
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${Answers.join('')} </div>`
                        );
                   }    
                ))
               

                formQuiz.innerHTML = output.join('');

        //this is the timer function for the game, if the player runs out of time for the whoe game
        //the game ends 
        // setTimeout(function(){
        //     console.log(timer)

        

        // let interval = setInterval(function() {
        //     timer--;
           
        //     $('timer').text(timer);
        //     if (timer === 0) {
        //         currentQuestion++;
        //         $("#trivbuttons").empty();
        //         i++;
        //         $("#response").empty();
        //         logic();
        //         timer = 60;
        // }        console.log('timer')
        // }, 1000);


    

        // }

        //this is the questions being pulled field- everything that needs to be asked
    // and the correct answers will be selceted by this function

  



});
               
            


       
        
   
