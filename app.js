/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,roundscore,player,playstaying;
init();
var lastdice;
var winnerscore;

    
    
    
           document.querySelector(".btn-roll").addEventListener("click",function(){
               if(playstaying){
           var  dice1 =  Math.floor(Math.random()*6)+1;
           var  dice2 =  Math.floor(Math.random()*6)+1; 
           document.getElementById("dice-1").style.display="block";
           document.getElementById("dice-2").style.display="block";
           document.getElementById("dice-1").src= "dice-"+ dice1 +".png" ;
           document.getElementById("dice-2").src= "dice-"+ dice2 +".png" ; 
            
                if(dice1 !== 1 && dice2!== 1){
                roundscore += dice1 + dice2;
                document.querySelector("#current-" + player).textContent = roundscore;
            }else{
                nextplayer();

            };
               };
              
           
        });
    
     
        document.querySelector(".btn-hold").addEventListener("click", function(){
   
    if(playstaying){
        score[player] += roundscore;
        document.querySelector("#score-" + player).textContent =score[player];
        var input = document.querySelector(".holders").value;
        if(input){
            winnerscore = input;
        }else{
            winnerscore = 100;
        }
        
        if(score[player] >= winnerscore){
            playstaying = false;
            document.querySelector("#name-"+ player).textContent = "Winner!";
            document.getElementById("dice-1").style.display="none";
            document.getElementById("dice-2").style.display="none";
            document.querySelector(".player-"+play+"-panel").classList.add("Winner!");
            document.querySelector(".player-"+play+"-panel").classList.remove("active");
            
            
        }else{
            nextplayer();
        }
    }
        
    });  
        
  
    
    function nextplayer(){
        player === 1 ? player = 0 : player = 1;
        roundscore = 0;
        document.getElementById("current-0").textContent ="0";
        document.getElementById("current-1").textContent ="0";
        
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.getElementById("dice-1").style.display="none";
        document.getElementById("dice-2").style.display="none";
        
    }
 document.querySelector(".btn-new").addEventListener("click",init);
    function init(){
        score =[0,0];
         roundscore=0;
        player = 0;
        playstaying = true;



        document.getElementById("dice-1").style.display="none";
        document.getElementById("dice-2").style.display="none";
        document.getElementById("score-0").textContent = 0;
        document.getElementById("score-1").textContent = 0;
        document.getElementById("current-0").textContent = 0;
        document.getElementById("current-1").textContent = 0;
        document.getElementById("name-0").textContent = "player 1 ";
        document.getElementById("name-1").textContent =" Player 2";
        document.querySelector(".player-0-panel").classList.remove("Winner!");
        document.querySelector(".player-1-panel").classList.remove("Winner!");
        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.add("active");
        document.querySelector(".player-0-panel").classList.add("active");
        

    }        