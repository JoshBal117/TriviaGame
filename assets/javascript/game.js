$(document).ready(function() {
    console.log("ready")


    //these are the event listeners for the UI; having a timer, also having two onclick listeners 
    //on the document its self. 
   
    // setting up some variables, and an object within the vriable for the questions
    let trivQuestions = [] // thisis going to be an array of questions held here
    let score = 0;
    
    let currentQuestion = 0 
    let correctAnswers = 0; // this is going to equal the amount of right questions
    let incorrectAnswers = 0;
    let missedAnswer= 0;
    //this is the timer for the game
    let timer = 60;
    let timeOut = 1000 * 5;
    let timedOut = false;
    let isCorrect = false;
    let inervalId;
    let timerRunning = false
    let i = 0;


startGame();


    function startGame(){
        console.log('game is ready')
        $('#startGame').on('click', )

        //this is  for loop to cycle through the questions
    


       
        //this is the timer function for the game, if the player runs out of time for the whoe game
        //the game ends 

        let interval = setInterval(function() {
            timer--;
            console.log('timer')
            $('timer').text(timer);
            if (timer === 0) {
                currentQuestion++;
                $("#trivbuttons").empty();
                i++;
                $("#response").empty();
                logic();
                timer = 60;
        }
        }, 1000);


        function logic() {

        }
    
}})   