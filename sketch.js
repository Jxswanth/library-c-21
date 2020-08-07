var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  gameObject=createSprite(200,100,50,100);
  gameObject1=createSprite(200, 300,100,100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 /* movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
*/
}

function draw() {
  background(0,0,0);  
movingRect.x = World.mouseX; movingRect.y = World.mouseY; if(isTouching(gameObject1,movingRect)) { movingRect.shapeColor="yellow"; gameObject1.shapeColor="yellow"; }else { movingRect.shapeColor="green"; gameObject1.shapeColor="green"; }
//  bounceOff(movingRect,fixedRect);
  drawSprites();
}
