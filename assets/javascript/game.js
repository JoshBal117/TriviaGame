$(document).ready(function() {
    console.log("ready")


    //these are the event listeners for the UI; having a timer, also having two onclick listeners 
    //on the document its self. 
   
    // setting up some variables, and an object within the vriable for the questions
  
    
    let trivQuestions = [
        {
            Question : "Yoda is how old in the Return of The Jedi?",
        Answers:[ 
                 "700 years old", 
                 "800 years old", 
                 "900 years old", 
                 "1100 years old",
        ],
            correctAnswer: "3"
        },
        {Question : "Luke wanted to get what from Tosche Station?",
        Answers:[   
                 "Power Couplings", 
                 "Power Converters", 
                 "Droid Inhibitor", 
                 "Lightsaber"
        ],
            correctAnswer: "2"
        },
           {Question: "Anakin is what as a child?",
           Answers:[
                 "A Jedi", 
                 "A Store Owner", 
                 "A Pilot", 
                 "A Slave",
    ],
           correctAnswer: "4"
        },
        {Question: "Obi Wan Kenobi is called what by Princess Leia?",
            Answers:[
                 "An Old Goat", 
                 "General Kenobi", 
                 "Ben Kenobi", 
                 "The Negotiator"
    ],
            correctAnswer: "2"
        },
            {Question: "Who is pursuing the Rebel Blockade Runner in Episode IV?",
            Answers:[
                 "Darth Vader", 
                 "Darth Maul", 
                 "Darth Tyranus", 
                 "Darth Bane" 
            ],
            correctAnswer: "1"            
                    },
    ] // this is going to be an array of questions held here
    let score = 0;
    let gameStatus = [];
    let currentQuestion = 0;
    let correctAnswers = 0;
    let missedAnswers = 0;
    let questionNumber = 0;
    let wins = 0;
    let incorrectAnswers =0;
    let userPick = [];

    //this is the timer for the game, where timer is the js timer; and time is the actual game time
    let counter = 60;
    let timeOut = 1000 * 5;
    let timeDisplay;
    let timedOut = false;
    let isCorrect = false;
    var intervalId;
    let timerRunning = false


    for (var i = 0; i < trivQuestions.length; i++) {
        userPick[i] = null;
    }    

        $("#startGame").click(function () {
            console.log('startGame')
            //Attach the setInterval object to a variable so that we can stop it later
            let intervalId = setInterval(decrement, 1000);
            //Use jQuery to call the function to write the questions to the html
            writeQuestions();
            $("#startGame").hide();
            writeSubmitButton();
    
            $("#submitQuiz").click(function () {
                showResults();
            });
            //This is the listener that will record the function that tracks what the user has clicked
            //This works because we structured the radio button groups with index x and i
            //This allows me to know what question the user picked (i) and the response (value).
            $("input").click(function () {
                userPick[this.name] = this.value;
            });
        });
    
        function answerButton() {
            for (var i = 0; i < trivQuestions[currentQuestion].Answers.length; i++) {
        
                // We create a button 
                var button = $("<button>");
        
                // Assigns the name of the array to the button.
                button.text(trivQuestion[currentQuestion].Answers[i]);
        
                // We create a class for the buttons 
                button.addClass("answer-buttons btn btn-primary");
        
                //ADDED AN ATTRIBUTE TO THE BUTTON THAT CREATES A PATH TO THE VALUES ARRAY AND TIES THE VALUE TO THE BUTTON. EXAMPLE. THE INDEX[0] OF VALUES WILL BE TIED TO THE INDEX[0] OF CHOICES.
                button.attr("value", trivQuestion[currentQuestion].Answers[i]);
                // CREATES AN ATTRIBUTE DATA NAME AND SETS IT EQUAL TO THE ARRAY ITEMS NAME.
                button.attr("Data-name", trivQuestion[currentQuestion].Answers[i]);
                // WE APPEND the button in the div with the #trivButtons id.
                $("#trivButtons").append(button);
            };
        }

        function writeQuestions() {
            for (var i = 0; i < trivQuestions.length; i++) {
                $("#formQuiz").append(trivQuestions[i].question + "</br>");
                console.log()
                //From within the first loop, write out the radio option buttons and assign them values and names of x and i respectively for later evaluation
                for (var x = 0; x < trivQuestions[i].Answers.length; x++) {
                    $("#formQuiz").append("<label class='radio-inline'><input value='" + x + "' type='radio' name='" + i + "'>" + trivQuestions[i].Answers[x] + "</label>");
                console.log("var")
                }
                $("#formQuiz").append("<br/><br/>");
            }
        }
        //Write the button to submit the form in the event the user does not want to wait for the timer expire event.
        function writeSubmitButton() {
            $("#formSubmit").append("<button id='submitQuiz' class='btn btn-primary btn-lg'>Submit</button>");
        }
    //Countdown counter
function decrement() {
    counter--;
    $("#timeRemaining").html("<h2><mark>" + counter + " seconds remaining.</mark></h2>");
    if (counter === 0) {
        alert("Time Up!");
        //Do additional logic and process the quiz results
        showResults();
    }
}
//Write the results to the HTML
function showResults() {
    //Hide the questions | options | and submit button
    $("#formQuiz").hide();
    $("#timeRemaining").hide();
    $("#submitQuiz").hide();
    //userPick[] was used to record the player responses 
    for (i = 0; i < trivQuestions.length; i++) {
        // Note: === evaluated to NaN so == was required.
        if (trivQuestions[i].answer == userPick[i]) {
            correctAnswers++;
        }
        // Unanswered questions
        else if (userPick[i] === null) {
            missedAnswers++;
        }
        // Logic dictates the only other possible outcome is a wrong answer
        else {
            incorrectAnswers++;
        }
    }
    // Assigning an HTML id to a variable 
    var qR = $("#quizResults");
    $(qR).append("<p>MAY THE FORCE BE WITH YOU, ALWAYS!</p>");
    $(qR).append("<p>Correct Answers: " + correctAnswers + "</p>");
    $(qR).append("<p>Incorrect Answers: " + incorrectAnswers + "</p>");
    $(qR).append("<p>Unanswered: " + missedAnswers + "</p>");
    //You must clear intervalID or it will repeat
    clearInterval(intervalId);
}
        

})
    