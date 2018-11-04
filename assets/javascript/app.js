var score = 0;
var total = 5;
var correct = 0;
var wrong = 0;
var userGuess;
var timeLeft = 60;

$(document).ready(function() {
    var intervalId;
    timer();
    
    $(".questionOne").hide();
    $("#results").hide();
    $("#q1").show();
    
    function timer() {
        clearInterval(intervalId)
        intervalId = setInterval(countdown, 1000);
    }
    
    function countdown() {
        timeLeft--;
        $("#timer").text(timeLeft);
        if (timeLeft === 0) {
            clearInterval(intervalId);
            alert("Oh no you have finished the time now.");
        }
    }
    
    // $("#submit1").on("click", function() {
    //     $(".questionOne").hide();
    //     $("#q1").show();
    //     $("#submit1").hide();
    //     return false;
    // });



    $("#q1 #submit").on("click", function(event){
        event.preventDefault();
        console.log('value', $("input[name='q1']:checked").val());
        if ("A NBA Player" === $("input[name='q1']:checked").val()) {
            correct++;
        } else {
            wrong++;
        }

        $(".questionOne").hide();
        $("#q2").show();
        // return false;
        console.log("q1", wrong);
        console.log("q1", correct);
    })
    $("#q2 #submit").on("click", function(event) {
        event.preventDefault();
        if ("Seattle" === $("input[name='q2']:checked").val()) {
            correct++;
        } else {
            wrong++;
        }
        $(".questionOne").hide();
        $("#q3").show();
        // return false;
        console.log("q2", wrong);
        console.log("q2", correct);
    })
    $("#q3 #submit").on("click", function(event) {
        event.preventDefault();
        if ("Jeff Bezos" === $("input[name='q3']:checked").val()) {
            correct++;
        } else {
            wrong++;
        }
        $(".questionOne").hide();
        $("#q4").show();
        // return false;
        console.log("q3", wrong);
        console.log("q3", correct);
    })
        
    $("#q4 #submit").on("click", function(event) {
        event.preventDefault();
        if ("Ana Mari Cauce" === $("input[name='q4']:checked").val()) {
            correct++;
        } else {
            wrong++;
        }
        $(".questionOne").hide();
        $("#q5").show();
        // return false;
        console.log("q4", wrong);
        console.log("q4", correct);
       }) 
    $("#q5 #submit").on("click", function(event) {
        event.preventDefault();
        if ("Alaska" === $("input[name='q5']:checked").val()) {
            correct++;
        } else {
            wrong++;
        }
        $(".questionOne").hide();
        $("#results").show();

        score = correct / 5 * 100;
        $("#user-score").append(score + "%");
        $("#user-correct").append(correct);
        $("#user-wrong").append(wrong);
        $("#totalquestions").append(total);
        // return false;
    })
        
        
    });



    // $("#q2 #submit").on("click", function(){
    //     $(".questionOne").hide();
    //     $("#q3").show();
    //     return false;
    // });

    // $("#q3 #submit").on("click", function(){
    //     $(".questionOne").hide();
    //     $("#q4").show();
    // });

    // $("#q4 #submit").on("click", function(){
    //     $(".questionOne").hide();
    //     $("#q5").show();
    //     return false;
    // });

    // $("#q5 #submit").on("click", function(){
    //     $(".questionOne").hide();
    //     $("#result").show();
    //     return false;
    // });

