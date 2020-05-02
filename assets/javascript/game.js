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
    let timer = 20000;
    
w


    //this is  for loop to cycle through the questions

})