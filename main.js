$(document).ready(function(){
  
    var magic8Ball = {};
    magic8Ball.listofanswers = ["Umm maybe.", "Yeah right", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "Shake me again", "Most likely.", "For sure.", "Yes.", "Signs point to yes.", "Don't know don't care.", "Ask again later.", "Better not tell you now.", "I don't think so.", "Think again.", "Don't count on it.", "In your dreams", "My heart says no.", "Anyways, Next.", "Battery Low."];
   
    magic8Ball.getAnswer = function(question)
    {
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
      
      $("#8ball").effect( "shake" );
      $("#answer").text( answer );
      $("#answer").fadeIn(3000);
      $("#8ball").attr("src", "https://us.123rf.com/450wm/tassel78/tassel781802/tassel78180200006/tassel78180200006.jpg?ver=6");
  
      console.log(question);
      console.log(answer);
    };
    $("#answer").hide();
  
    var onClick = function()
    {
      $("#answer").hide();
      $("#8ball").attr("src", "https://us.123rf.com/450wm/tassel78/tassel781802/tassel78180200006/tassel78180200006.jpg?ver=6");
      var question = prompt("What do you want to know?");
      magic8Ball.getAnswer(question);
    };
    
    $("#questionButton").click( onClick );
  });
  