var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Crear al jugador Sofía
var Sofia=createSprite(20,25,18,18);
Sofia.shapeColor=("white");

//Crear las paredes del laberinto (wall1 - wall2)
  var wall1=createSprite(77,70,100,20);
  
  var wall2=createSprite(108,100,20,150);
  
  var wall3=createSprite(109,165,150,20);
  
  var wall4=createSprite(184,172,20,135);
  
  var wall5=createSprite(193,234,150,20);
  
  var wall6=createSprite(268,249,20,100);
  
  var wall7=createSprite(248,289,76,20);
  
  var wall8=createSprite(270,328,20,60);
  
  var wall9=createSprite(1,116,150,20);
  
  var wall10=createSprite(396,76,100,20);
  
  var wall11=createSprite(346,82,20,100);
  
  var wall12=createSprite(327,128,100,20);
  
  var wall13=createSprite(397,322,100,20);
  
  var wall14=createSprite(45,200,20,100);
  
  var wall15=createSprite(59,210,80,20);
  
  var wall16=createSprite(1,285,180,20);
  
  var wall17=createSprite(165,320,20,100);
  
  var wall18=createSprite(165,362,120,20);
  
  var wall19=createSprite(397,236,150,20);
  
  var wall20=createSprite(252,52,170,20);
  
  var wall21=createSprite(230,140,20,100);
  
 var wall22=createSprite(306,350,20,100);

var cup=createSprite(375,368,20,45);
cup.shapeColor=("yellow");
  
function draw() {
  //Coloca el fondo de color rosa.
  background("cyan");

if (keyDown("DOWN_ARROW")){
  Sofia.y=Sofia.y+5;
}

if (keyDown("UP_ARROW")){
  Sofia.y=Sofia.y-5;
}

if (keyDown("LEFT_ARROW")){
  Sofia.x=Sofia.x-5;
}

if (keyDown("RIGHT_ARROW")){
  Sofia.x=Sofia.x+5;
}

createEdgeSprites();
Sofia.bounceOff(edges);
Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);


  if (Sofia.collide(cup)){
  background("white");
}

drawSprites();

}






































function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}
























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
