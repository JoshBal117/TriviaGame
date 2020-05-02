$(document).ready(function() {
    console.log(ready)


    //these are the event listeners for the UI; having a timer, also having two onclick listeners 
    //on the document its self. 
    $('#remaining-time').show();
    $('document').on('click','.option', trivia.startGame );
    $('document').on('click', '.option', triva.guesschecker);
    // setting up some variables, and an object within the vriable for the questions
    let questions = [] // thisis going to be an array of questions held here
    let score = 0; // this is going to equal the amount of right questions
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let missedAnswer= 0;
    //this is the timer for the game
    let timer = 60;
    let timeOut = 1000 * 5;
    let timedOut = false;
    let isCorrect = false;
    let inervalId;
    let timerRunning = false;


w
    // this is the game start button
    $('startGame').click(function()) {
        //putting into place an object Interval so that we can stop the interval later
        intervalId = setInterval(decrement, 1000)
        //This is a JQuery fucntion to write the questions in place of the  Start Button 
        writeQuestions();
        $("startGame").hide();
        writeSubmitButton();
        console.log(writeSubmitButton "we are ready here")



    }

    //this is  for loop to cycle through the questions



    //ths is the timer for countdown
    // timer 
    let timer = {
        // Amount of time for each question
        timeRemaining: timeSetting,

        start: function() {

            // Sets the interval if timer is not running
            if (!timerRunning) {
                intervalId = setInterval(timer.count, 1000);
                timerRunning = true;
            }
        },

        stop: function() {
      
            // Clears the timer and resets
            clearInterval(intervalId);
            timerRunning = false;
            timer.timeRemaining = timeSetting;
        },

        count: function() {

            // Subtract one from time remaining
            timer.timeRemaining--;
            $(".timer-display").text(timer.timeRemaining);
    
            // Go to time out screen once timer reaches 0
            if (timer.timeRemaining === 0) {
                timedOut = true;
                timer.stop();
                outOfTime();
            } console.log(timerRemaining)

    }

};
}
    