// TODO 4: Add a parameter for your gaming library in the index.js module:
(function(window, createjs, opspark, sparky) {
  // OUR MODULE CODE GOES BELOW HERE //

  console.log('index.js initialized!');

  const
    // setup the standard demo 
    engine = opspark.V6().activateResize(),
    canvas = engine.getCanvas(),
    stage = engine.getStage(),
    
    
    radius = 25, // the radius of our two circles
    distance = number(prompt('How far is the basketball from the front of the rim?')),
    shapeUp = new createjs.Shape();// the up state: the mouse is NOT intersecting

  shapeUp.graphics.beginFill('orange').drawCircle(distance, 0, radius);

  /*
   * Create a textfield - position it horizontally centered, and  
   * vertically just below center by 50px, so it sits below our circle shapes.
   */
  const
    textfield = new createjs.Text('Distance: ', "20px Arial", "#BBB"),
    textBounds = textfield.getBounds();
    
  textfield.x = (canvas.width - textBounds.width) / 2;
  textfield.y = canvas.height / 2 + 50;
  
  stage.addChild(shapeUp, shapeOver, textfield);
  
  // The update() method is called 60 times a second //
  function update(event) {
    var mouse = {
      x: stage.mouseX,
      y: stage.mouseY,
    };
    /*
     * TODO 5: use getDistance to calculate the distance between shapeUp and 
     * the mouse. Store the result in a variable called distance:
     */
    var distance = sparky.phyz.getDistance(mouse, shapeUp);
    
    
    /*
     * TODO 6: Check if the mouse is within the area of shapeUp, and set the 
     * alpha property of shapeUp accordingly:
     */
    if (distance < 25){
      shapeOver.alpha = 1;
    } else {
      shapeOver.alpha = 0;
    }
    
    /*
     * Update the textfield with the current distance between the mouse and 
     *the edge of the shapeUp
     */
    updateText(textfield, `Distance: ${Math.round(distance)}px`);
  }
  
  
  // this method updates the text on a textfield, then re-centers the textfield //
  function updateText(textfield, text) {
    textfield.text = text;
    const textBounds = textfield.getBounds();
    
    // re-center the text each time it changes //
    textfield.x = (canvas.width - textBounds.width) / 2;
    textfield.y = canvas.height / 2 + 50;
  }

  function getDistance(pointA, pointB) {
    const
      distanceX = pointB.x - pointA.x,
      distanceY = pointB.y - pointA.y,
      distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    return distance;
  }

  // startup the engine (the tick) //
  engine
    .addTickHandlers(update)
    .activateTick();

  // OUR MODULE CODE GOES ABOVE HERE //
  
// TODO 3: Pass your gaming library into the index.js module:
}(window, window.createjs, window.opspark, window.sparky));
