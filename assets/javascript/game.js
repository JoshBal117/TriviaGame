$(document).ready(function() {
    console.log("ready")


    //these are the event listeners for the UI; having a timer, also having two onclick listeners 
    //on the document its self. 
   
    // setting up some variables, and an object within the vriable for the questions
  
    
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
    let correctAnswers = 0;
    let missedAnswers = 0;
    let questionNumber = 0;
    let wins = 0;
    let incorrectAnswers =0;
    let userPick = [];

    //this is the timer for the game, where timer is the js timer; and time is the actual game time
    let timer = 60;
    let timeOut = 1000 * 5;
    let timeDisplay;
    let timedOut = false;
    let isCorrect = false;
    let inervalId;
    let timerRunning = false


    for (var i = 0; i < trivQuestions.length; i++) {
        userPick[i] = null;

        

        $("#startGame").click(function () {
            console.log('startGame')
            //Attach the setInterval object to a variable so that we can stop it later
            intervalID = setInterval(decrement, 1000);
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
            for (var i = 0; i < questions.length; i++) {
                $("#formQuiz").append(questions[i].question + "</br>");
                //From within the first loop, write out the radio option buttons and assign them values and names of x and i respectively for later evaluation
                for (var x = 0; x < questions[i].Answers.length; x++) {
                    $("#formQuiz").append("<label class='radio-inline'><input value='" + x + "' type='radio' name='" + i + "'>" + questions[i].choices[x] + "</label>");
                }
                $("#formQuiz").append("<br/><br/>");
            }
        }
        //Write the button to submit the form in the event the user does not want to wait for the timer expire event.
        function writeSubmitButton() {
            $("#formSubmit").append("<button id='submitQuiz' class='btn btn-primary btn-lg'>Submit</button>");
        }
    }
        

})
    