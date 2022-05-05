var scores, scores1, dice1, dice2, dice3, dice4, roundScore, roundScore1, activePlayer, activePlayer1, gameplayer, winningScore, winningScore1, overall, overall1;

var roll = document.querySelector('.btn-roll');
var roll2 = document.querySelector('.btn-roll2');
var hold = document.querySelector('.btn-hold');
var hold2 = document.querySelector('.btn-hold2');
var freshGame = document.querySelector('.btn-newOne');
var freshGame2 = document.querySelector('.btnnewOne');
var newGame = document.querySelector('.btn-new');
var newGame2 = document.querySelector('.btn-new2');
var diceOne = document.querySelector('#dice-1');
var diceOne1 = document.querySelector('#dice_1');
var diceTwo = document.querySelector('#dice-2');
var diceTwo1 = document.querySelector('#dice_2');
var scoreOne = document.querySelector('#score-0');
var currentOne = document.querySelector('#current-0');
var scoreTwo = document.querySelector('#score-1');
var currentTwo = document.querySelector('#current-1');
var scoreThree = document.querySelector('#score-2');
var currentThree = document.querySelector('#current-2');
var scoreFour = document.querySelector('#score-3');
var currentFour = document.querySelector('#current-3');
var scoreFive = document.querySelector('#score-4');
var currentFive = document.querySelector('#current-4');
var scoreSix = document.querySelector('#score-5');
var currentSix = document.querySelector('#current-5');
var nameOne = document.querySelector('#name-0');
var scoreNameOne = document.querySelector('#nam-0');
var nameTwo = document.querySelector('#name-1');
var scoreNameTwo = document.querySelector('#nam-1');
var nameThree = document.querySelector('#name-2');
var scoreNameThree = document.querySelector('#nam-2');
var nameFour = document.querySelector('#name-3');
var scoreNameFour = document.querySelector('#nam-3');
var nameFive = document.querySelector('#name-4');
var scoreNameFive = document.querySelector('#nam-4');
var nameSix = document.querySelector('#name-5');
var scoreNameSix = document.querySelector('#nam-5');
var playerPanelOne = document.querySelector('.player-0-panel');
var playerPanelTwo = document.querySelector('.player-1-panel');
var playerPanelThree = document.querySelector('.player-2-panel');
var playerPanelFour = document.querySelector('.player-3-panel');
var playerPanelFive = document.querySelector('.player-4-panel');
var playerPanelSix = document.querySelector('.player-5-panel');
var firstPlayerName = document.querySelector('#first-name');
var secondPlayerName = document.querySelector('#second-name');
var thirdPlayerName = document.querySelector('#third-name');
var fourthPlayerName = document.querySelector('#fourth-name');
var fifthPlayerName = document.querySelector('#fifth-name');
var sixthPlayerName = document.querySelector('#sixth-name');
var scoreToWin = document.querySelector('#score-win');
var scoreToWin2 = document.querySelector('#score-win2');
var wrapper = document.querySelector('.wrapper');
var wrapper2 = document.querySelector('.wrapper2');
var startGame = document.querySelector('.start-game');
var startGame2 = document.querySelector('.start-game2');
var welcomeBox = document.querySelector('#welcome-box');
var overallOne = document.querySelector('#player-0-score');
var overallTwo = document.querySelector('#player-1-score');
var scoreBoard = document.querySelector('.score-board');
var goBack = document.querySelector('.btn-back');
var goBack2 = document.querySelector('.btn-back2');
var displayOne = document.querySelector('.displayOne');
var displayTwo = document.querySelector('.displayTwo');
var displayThree = document.querySelector('.displayThree');
var twoPlayers = document.querySelector('.twoP');
var fourPlayers = document.querySelector('.FourP');
var selectPlayers = document.querySelector('.selectPlayers');
var settings = document.querySelector('button');
var selectP = document.querySelector('.selectP');
var gameTitle = document.querySelector('game-title');
var ruleBox = document.querySelector('.rule-box');
var ruleBox2 = document.querySelector('.rule-box2');

//init function
init();

init2();

//To start the game

startGame.addEventListener('click', function () {
    init();

    if (firstPlayerName.value === '' || secondPlayerName.value === '' || thirdPlayerName.value === '' || fourthPlayerName.value === '') {
        noGame();
        alert('Please enter names');
        refreshPage();
        
    } else if (scoreToWin.value === '') {
        noGame();
        alert('Enter score to win');
        refreshPage();

    } else{
        playerName();
    }
    

    scoreBoard.style.display = 'block';
    wrapper.style.display = 'block';
    displayOne.style.display = 'block';
    displayTwo.style.display = 'block';
    welcomeBox.style.display = 'none';

})

startGame2.addEventListener('click', function () {
    init2();

    if (nameFive.value === '' || nameSix.value === '') {
        noGame();
        alert('Please enter names');
        refreshPage();
        
    } else if (scoreToWin2.value === '') {
        noGame();
        alert('Enter score to win');
        refreshPage();

    } else{
        playerName2();
    }
    

    
    wrapper2.style.display = 'block';
    displayThree.style.display = 'block';
    playerPanelFive.style.display = 'block';
    playerPanelSix.style.display = 'block';
    

})


//To select the number of players

selectP.addEventListener('click', function() {
    playerSelect();
})


const playerSelect = () => {
    if (document.querySelector(`input[name=fourP]:checked`)?.value != null && document.querySelector(`input[name=twoP]:checked`)?.value == null) {

        
        selectPlayers.style.display = 'none';
        ruleBox.style.display = 'block';
        gameTitle.style.display = 'block';


    } else if (document.querySelector(`input[name=fourP]:checked`)?.value == null && document.querySelector(`input[name=twoP]:checked`)?.value != null) {

        selectPlayers.style.display = 'none';
        ruleBox2.style.display = 'block';
        //gameTitle.style.display = 'block';

    } else if (document.querySelector(`input[name=fourP]:checked`)?.value != null && document.querySelector(`input[name=twoP]:checked`)?.value != null ) {

        alert('Please select only one option');
        refreshPage();
    }
    else {
        alert('Please select number of players');
        refreshPage();
    }

}


//To reload the page
const refreshPage = () => {
  location.reload();
}



freshGame.addEventListener('click', refreshPage);
freshGame2.addEventListener('click', refreshPage);


goBack.addEventListener('click', function () {

    scoreBoard.style.display = 'none';
    welcomeBox.style.display = 'block';
    wrapper.style.display = 'none';
})

goBack2.addEventListener('click', function () {

    scoreBoard.style.display = 'none';
    welcomeBox.style.display = 'block';
    wrapper2.style.display = 'none';
})

const goback = () => {
    ruleBox.style.display = 'block';
    welcomeBox.style.display = 'block';
    scoreBoard.style.display = 'none';
    wrapper.style.display = 'none';
    playerPanelOne.style.display = 'none';
    playerPanelTwo.style.display = 'none';
    playerPanelThree.style.display = 'none';
    playerPanelFour.style.display = 'none';
}

document.querySelector('.backHome').addEventListener('click', function () {
    refreshPage();
});

document.querySelector('.backHome2').addEventListener('click', function () {
    refreshPage();
});



//When player rolls the dice

roll.addEventListener('click', function () {

    
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    diceOne.style.display = 'block';
    diceTwo.style.display = 'block';

    diceOne.src = 'img/dice-' + dice1 + '.png';
    diceTwo.src = 'img/dice-' + dice2 + '.png';

    //rule one -> if a player's dice rolls 1, it should set the curent score to zero and pass active to the next player, but if the dice is not add the score 
    if (dice1 !== 1 && dice2 !== 1) {
        roundScore = dice1 + dice2;
        //console.log(roundScore);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //set roundScore to zero
        roundScore = 0;
        //Move to the next player
        nextPlayer();
    }
    
})

roll2.addEventListener('click', function () {

    
    dice3 = Math.floor(Math.random() * 6) + 1;
    dice4 = Math.floor(Math.random() * 6) + 1;

    diceOne1.style.display = 'block';
    diceTwo1.style.display = 'block';

    diceOne1.src = 'img/dice-' + dice3 + '.png';
    diceTwo1.src = 'img/dice-' + dice4 + '.png';

    //rule one -> if a player's dice rolls 1, it should set the curent score to zero and pass active to the next player, but if the dice is not add the score 
    if (dice3 !== 1 && dice4 !== 1) {
        roundScore1 = dice3 + dice4;
        //console.log(roundScore1);
        document.querySelector('#current-' + activePlayer1).textContent = roundScore1;
        //console.log(document.querySelector('#current-' + activePlayer1).textContent);
    }else{
        //set roundScore to zero
        roundScore1 = 0;
        //Move to the next player
        nextPlayers();
    }
    
})

//new game
newGame.addEventListener('click', function () {
    init();

    playerName();
})

newGame2.addEventListener('click', function () {
    init2();

    playerName2();
})






//hold button - when player wants to end his turn and pass to the next player

hold.addEventListener('click', function () {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //set highest score
    winningScore = scoreToWin.value;
   

    //which player wins, and setting the actual score 
    if (scores[activePlayer] >= winningScore) {
        if (overall === 0) {
            overall = 1;
            
            document.querySelector('#name-' + activePlayer).textContent ='Winner!';
            document.querySelector('#player-' + activePlayer + '-score').textContent = overall;
            

            diceDisplay();

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        }else if (overall >= 1) {
           
            var clear = overall++;
            document.querySelector('#name-' + activePlayer).textContent ='Winner!';
            document.querySelector('#player-' + activePlayer + '-score').textContent = clear;
            

            diceDisplay();

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        }
    }else {
        nextPlayer();
    }
})

hold2.addEventListener('click', function () {
    scores1[activePlayer1] += roundScore1;
    //console.log(scores1[activePlayer1])
    document.querySelector('#score-' + activePlayer1).textContent = scores1[activePlayer1];

    //set highest score
    winningScore1 = scoreToWin2.value;
   

    //which player wins, and setting the actual score 
    if (scores1[activePlayer1] >= winningScore1) {
        if (overall1 === 0) {
            overall1 = 1;
            
            document.querySelector('#name-' + activePlayer1).textContent ='Winner!';
            document.querySelector('#player-' + activePlayer1 + '-score').textContent = overall1;
            

            diceDisplay1();

            document.querySelector('.player-' + activePlayer1 + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer1 + '-panel').classList.remove('active');
        }
        }else {

        nextPlayers();
    }
})




function nextPlayers() {
    activePlayer1 === 4 ? activePlayer1 = 5 : activePlayer1 = 4;
    
    // currentFive.textContent = '0';
    // currentSix.textContent = '0';

    if (activePlayer1 === 4) {
        playerPanelSix.classList.remove('active');
        playerPanelFive.classList.add('active');
    }else{
        playerPanelFive.classList.remove('active');
        playerPanelSix.classList.add('active');  
    }

    diceDisplay1();
    
}

//To edit and add player names 

function playerName(){
    nameOne.textContent = firstPlayerName.value;
    nameTwo.textContent = secondPlayerName.value;
    nameThree.textContent = thirdPlayerName.value;
    nameFour.textContent = fourthPlayerName.value;

    scoreNameOne.textContent = firstPlayerName.value;
    scoreNameTwo.textContent = secondPlayerName.value;
    scoreNameThree.textContent = thirdPlayerName.value; 
    scoreNameFour.textContent = fourthPlayerName.value;
}

function playerName2() {
    nameFive.textContent = fifthPlayerName.value;
    nameSix.textContent = sixthPlayerName.value;
}


//To pass active player to the next player

function nextPlayer() {
    //pass te active player to the next player
    //condition            action         else      action
    //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    if (activePlayer === 0) {
        activePlayer = 1;
    }else if (activePlayer === 1) {
        activePlayer = 2;
    }else if (activePlayer === 2) {
        activePlayer = 3;
    } else if(activePlayer === 3){
        activePlayer = 0;
    }


    //set current score to zero
    currentOne.textContent = '0';
    currentTwo.textContent = '0';
    currentThree.textContent = '0';
    currentFour.textContent = '0';

    if(activePlayer === 0){
        playerPanelFour.classList.remove('active');
        playerPanelThree.classList.remove('active');
        playerPanelTwo.classList.remove('active');
        playerPanelOne.classList.add('active');

        playerPanelTwo.style.display = 'block';
        playerPanelOne.style.display = 'block';

        playerPanelFour.style.display = 'block';
        playerPanelThree.style.display = 'block';
        
    }else if (activePlayer === 1) {

        playerPanelFour.classList.remove('active');
        playerPanelThree.classList.remove('active');

        playerPanelOne.classList.remove('active');
        playerPanelTwo.classList.add('active');

        playerPanelTwo.style.display = 'block';
        playerPanelOne.style.display = 'block';

        playerPanelFour.style.display = 'block';
        playerPanelThree.style.display = 'block';
    } else if (activePlayer === 2) {

        playerPanelFour.classList.remove('active');
        playerPanelOne.classList.remove('active');
        playerPanelTwo.classList.remove('active');
        playerPanelThree.classList.add('active');
        
        playerPanelTwo.style.display = 'block';
        playerPanelOne.style.display = 'block';
        playerPanelFour.style.display = 'block';
        playerPanelThree.style.display = 'block';
    }else if (activePlayer === 3){
        playerPanelThree.classList.remove('active');
        playerPanelOne.classList.remove('active');
        playerPanelTwo.classList.remove('active');
        playerPanelFour.classList.add('active');


        playerPanelTwo.style.display = 'block';
        playerPanelOne.style.display = 'block';
        playerPanelFour.style.display = 'block';
        playerPanelThree.style.display = 'block';
    } else{
        playerPanelFour.classList.remove('active');
        playerPanelThree.classList.remove('active');
        playerPanelTwo.classList.remove('active');
        playerPanelOne.classList.add('active');

        playerPanelTwo.style.display = 'block';
        playerPanelOne.style.display = 'block';

        playerPanelFour.style.display = 'block';
        playerPanelThree.style.display = 'block';
    }
    
    
    diceDisplay();
}


//Set a new game

function init() {

    //set default to zero
   scores = [0, 0, 0, 0];
   roundScore = 0;
   activePlayer = 0;
   overall = 0;

   //set dice picture to display none
   diceOne.style.display = 'none';
   diceTwo.style.display = 'none';

   //set te players score and current score to 0
   scoreOne.textContent = '0';
   currentOne.textContent = '0';
    scoreTwo.textContent = '0';
    currentTwo.textContent = '0';
    scoreThree.textContent = '0';
    currentThree.textContent = '0';
    scoreFour.textContent = '0';
    currentFour.textContent = '0';
    

    diceDisplay();
    //set winner to none
    playerPanelOne.classList.remove('winner');
    playerPanelTwo.classList.remove('winner');
    playerPanelThree.classList.remove('winner');
    playerPanelFour.classList.remove('winner');
    //set player's name to default
    nameOne.textContent = 'PLAYER 1';
    nameTwo.textContent = 'PLAYER 2';
    nameThree.textContent = 'PLAYER 3';
    nameFour.textContent = 'PLAYER 4';
    //remove active on both players
    playerPanelOne.classList.remove('active');
    playerPanelTwo.classList.remove('active');
    playerPanelThree.classList.remove('active');
    playerPanelFour.classList.remove('active');

    playerPanelTwo.style.display = 'block';
    playerPanelOne.style.display = 'block';

    playerPanelFour.style.display = 'block';
    playerPanelThree.style.display = 'block';

    //settings.style.display = 'block';



    //set active to player one
    playerPanelOne.classList.add('active');
}

function init2() {

    //set default to zero
   scores1 = [0, 0, 0, 0, 0, 0];
   roundScore1 = 0;
   activePlayer1 = 4;
   overall1 = 0;

   //set dice picture to display none
   diceOne1.style.display = 'none';
   diceTwo1.style.display = 'none';

   //set te players score and current score to 0

    scoreFive.textContent = '0';
    scoreSix.textContent = '0';

    currentFive.textContent = '0';
    currentSix.textContent = '0';
    

    diceDisplay1();
    //set winner to none
    
    playerPanelFive.classList.remove('winner');
    playerPanelSix.classList.remove('winner');
    //set player's name to default
   

    nameFive.textContent = 'PLAYER 1';
    nameSix.textContent = 'PLAYER 2';   
    //remove active on both players
 

    playerPanelFive.classList.remove('active');
    playerPanelSix.classList.remove('active');


    playerPanelFive.style.display ='block';
    playerPanelSix.style.display = 'block';

    //settings.style.display = 'block';



    //set active to player one
    playerPanelFive.classList.add('active');
}

//To display dice

function diceDisplay() {
    diceOne.style.display = 'none';
    diceTwo.style.display = 'none';
 
}

function diceDisplay1() {
    diceOne1.style.display = 'none';
    diceTwo1.style.display = 'none';
 
}

//For no game

function noGame() {
    scoreBoard.style.display = 'none';
    welcomeBox.style.display = 'block';
    wrapper.style.display = 'none';
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();    
  }

  function play1() {
    var audio1 = document.getElementById("audio1");
    audio1.play();    
  }
  

