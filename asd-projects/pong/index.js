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
let score1 = 0;
let score2 = 0;


  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keyup', handleRelease);                         // change 'eventType' to the type of event you want to handle
  $(document).on('keydown', handlePress);  
  startBall();
  $("#player1Score").text(score1);
  $("#player2Score").text(score2);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    moveObject(ball);
    moveObject(paddle1);
    moveObject(paddle2);
    if (doCollide(ball, paddle1)) {
      ball.speedX *= -1;
    }
    if (doCollide(ball, paddle2)) {
      ball.speedX *= -1;
    }
    if (score1 === 10 || score2 === 10){
      endGame()
    }
  }
  
  /* 
  Called in response to events.
  */
  function handlePress(event) {
      if (event.which === KEY.W) {
        console.log("W Pressed");
        paddle1.speedY = -5;
      }else if (event.which === KEY.UP) {
        console.log("Up Pressed");
        paddle2.speedY = -5;
      }else if (event.which === KEY.S) {
        console.log("S Pressed");
        paddle1.speedY = 5;
      }else if (event.which === KEY.DOWN) {
        console.log("Down Pressed");
        paddle2.speedY = 5;
      }
    }
  function handleRelease(event) {
    if (event.which === KEY.W) {
      console.log("W Released");
      paddle1.speedY = 0;
    }else if (event.which === KEY.UP) {
      console.log("Up Released");
      paddle2.speedY = 0;
    }else if (event.which === KEY.S) {
      console.log("S Released");
      paddle1.speedY = 0;
    }else if (event.which === KEY.DOWN) {
      console.log("Down Pressed");
      paddle2.speedY = 0;
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
    ball.speedX = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    console.log(ball.speedX);
    console.log(ball.speedY);
  }

  //Moves any Object based on Speed
  function moveObject(object){
    object.x = object.x + object.speedX;
    object.y = object.y + object.speedY;
    wallCollision(object);
    $(object.id).css("left", object.x);
    $(object.id).css("top", object.y);
  }

  //Checks an Objects collision with walls
  function wallCollision(object){
    //checks if object goes too far right
     if (object.x + object.width > BOARD_WIDTH){
      //checks if the ball is scoring and changes score and resets game
      if (object === ball){
        score1 += 1;
        $("#player1Score").text(score1);
        startBall();
      } else {
      object.x = BOARD_WIDTH - object.width;
      }
     }
   //checks if object goes too far down
     if (object.y + object.height > BOARD_HEIGHT){
       object.y = BOARD_HEIGHT - object.height;
       //if the ball is the object then it makes the ball bounce off the wall
       if (object === ball){
         object.speedY *= -1;
       }
     }
    //checks if object is too far up
     if (object.y < 0){
       object.y = 0;
       //if the ball is the object then it makes the ball bounce off the wall
       if (object === ball){
        object.speedY *= -1;
      }
     }
    //checks if object is too far left
     if (object.x < 0){
      //checks if the ball is scoring and changes score and resets game
      if (object === ball){
        score2 += 1;
        $("#player2Score").text(score2);
        startBall();
      }else {
       object.x = 0;
      }
     }
  }

  //checks for collision bettween 2 objects
  function doCollide (obj1, obj2){
    return (obj2.x < (obj1.x + obj1.width) && (obj2.x + obj2.width) > obj1.x && obj2.y < (obj1.y + obj1.height) && (obj2.y + obj2.height) > obj1.y ? true:false);
  }
}