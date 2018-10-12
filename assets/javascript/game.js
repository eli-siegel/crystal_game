$(document).ready(function(){

    //selects random # between 19-120
    var random=Math.floor(Math.random()*101+19);

    //displays random # under span id "targetNumber"
    $("#targetNumber").text(random);

    //creating variables to be paired with each crystal (random numbers between 1-12)
    var blue= Math.floor(Math.random()*11+1);
    var green= Math.floor(Math.random()*11+1);
    var red= Math.floor(Math.random()*11+1);
    var purp= Math.floor(Math.random()*11+1);

    //setting up counter vars (wins, losses, score counter)
    var wins = 0;
    var losses = 0;
    var count = 0;

    //displays wins and losses in page
    $("#wins").text(wins);
    $("#losses").text(losses);

    //reset function to call when user wins or loses
    function reset(){
        random=Math.floor(Math.random()*101+19);
        $('#targetNumber').text(random);
        blue= Math.floor(Math.random()*11+1);
        green= Math.floor(Math.random()*11+1);
        red= Math.floor(Math.random()*11+1);
        purp= Math.floor(Math.random()*11+1);
        count= 0;
        $('#count').text(count);
    } 

    //function for wins
    function win(){
        alert("Way to go, champ");
          wins++; 
          //adds win total to page, calls reset function
          $('#wins').text(wins);
          reset();
    }

    //function for losses
    function lose(){
        alert ("You are a loser");
          losses++;
          //adds loss total to page, calls reset function
          $('#losses').text(losses);
          reset()
    }

    //click scoring setup on crystal images
    $('#blue').on ('click', function(){
        count = count + blue;
        $('#count').text(count); 
            if (count == random){
              win();
            }
            else if (count > random){
              lose();
            }   
      });

    $('#green').on ('click', function(){
        count = count + green;
        $('#count').text(count); 
            if (count == random){
              win();
            }
            else if (count > random){
              lose();
            }   
      });

    $('#red').on ('click', function(){
        count = count + red;
        $('#count').text(count); 
            if (count == random){
              win();
            }
            else if (count > random){
              lose();
            }   
      });

    $('#purp').on ('click', function(){
        count = count + purp;
        $('#count').text(count); 
            if (count == random){
              win();
            }
            else if (count > random){
              lose();
            }   
      });

})