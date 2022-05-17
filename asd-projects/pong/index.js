/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();
  const KEY = {
    "UP": 38,
    "DOWN": 40,
    "W": 87,
    "S": 83
  }
  
  // Game Item Objects
let paddle1 = factory("#player1Paddle");
let paddle2 = factory("#player2Paddle");
let ball = factory("#gameBall");
let score1;
let score2;


  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keyup', handleRelease);                         // change 'eventType' to the type of event you want to handle
  $(document).on('keydown', handlePress);  

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  function handlePress(event) {
      if (event.which === KEY.W) {
        console.log("W Pressed");
      }else if (event.which === KEY.UP) {
        console.log("Up Pressed");
      }else if (event.which === KEY.S) {
        console.log("S Pressed");
      }else if (event.which === KEY.DOWN) {
        console.log("Down Pressed");
      }
    }
  function handleRelease(event) {
    if (event.which === KEY.W) {
      console.log("W Released");
    }else if (event.which === KEY.UP) {
      console.log("Up Released");
    }else if (event.which === KEY.S) {
      console.log("S Released");
    }else if (event.which === KEY.DOWN) {
      console.log("Down Pressed");
    }
  }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
    
    // create paddles and ball
  function factory(id){
    var gameObject = {};
      gameObject.id = id;
      gameObject.x = parseFloat($(id).css('left'));
      gameObject.y = parseFloat($(id).css('top'));
      gameObject.width = $(id).width();
      gameObject.height = $(id).height();
      gameObject.speedX = 0;
      gameObject.speedY = 0;
    console.log(gameObject);
    return gameObject;
  }
  
  //Reset Ball
  function startBall () {
    ball.x = 330;
    ball.y = 230;
    speed.x = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    speed.y = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  }

  //Moves any Object based on Speed
  function moveObject(object){
    object.x = object.x + object.speedX;
    object.y = object.y + object.speedY;
    $(object.id).css("left", object.x);
    
    $(object.id).css("top", object.y);
  }
