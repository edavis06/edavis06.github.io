// TODO 4: add a param for your game lib last //
(function(window, opspark, sparky) {
  console.log('index.js initialized!');

  const
    assets = opspark.assets,
    engine = opspark.V6().activateResize(),
    canvas = engine.getCanvas(),
    stage = engine.getStage();
  

  //Choose number of ships on the screen //
  const shipNumber = 4
  
  var ships = [];
  var textfields = [];
  
  //Creates ships, gives them random positions and colors, and adds them to the stage. Also creates textfields and adds them to the stage.
  for (var i = 0; i < shipNumber; i++){
    ships.push(assets.makeShip(getRandomColor()));
    ships[i].x = Math.random()*canvas.width;
    ships[i].y = Math.random() * canvas.height;
    stage.addChild(ships[i]);

    textfields.push(assets.makeTextfield('Degrees: '));
    stage.addChild(textfields[i]);
  }

  
  
  // TODO 5: Center the ship on the stage //
  //ship.x = canvas.width/2;
 // ship.y = canvas.height/2;


  // TODO 6: Add the ship to the stage //
  //stage.addChild(ship);

  
  function update(event) {
    /*
     * TODO 7: Use your game lib's getAngleDegrees to get 
     * the degrees of the angle between the ship and the 
     * mouse position, and assign it to a const called
     * degrees.
     *
     * Remember, the (x, y) location of the mouse is available
     * stage.mouseX and stage.mouseY, BUT, your getAngleDegrees()
     * method takes two points. What do you need to do to translate
     * these values such that they're packed into a point?
     */
    const mouse = {
    x: stage.mouseX,
    y: stage.mouseY,
    };
    
    //Gets Degrees for each ship, rotates them, and updates each textfield
    for (var i = 0; i < ships.length; i++){
      const degrees = sparky.numz.getAngleDegrees(ships[i], mouse);
      ships[i].rotation = degrees;
      assets.updateText(textfields[i], `Degrees: ${degrees.toFixed(1)}°`, canvas);

    }


    
    // TODO 8: Set the ship's rotation property to the degrees //
    
    
    
    /*
     * TODO 9: Uncomment the line below to update the textfield  
     * with the current angle degrees. Degrees will be a value 
     * between π and -π, or, 180 and -180.
     */
    //assets.updateText(textfield, `Degrees: ${ships[i-1].rotation.toFixed(3)}°`, canvas);
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  engine
    .addTickHandlers(update)
    .activateTick();

// TODO 3: pass your game lib last with, window.my-game-lib //
}(window, window.opspark, window.sparky));
