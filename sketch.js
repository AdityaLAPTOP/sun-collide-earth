var sun,earth,sunImage,earthImage;
function preload(){
  sunImage=loadImage("sun.jpg");
  earthImage=loadImage("earth.jpg");
}

function setup() {
  createCanvas(800,400);
 sun= createSprite(0, 0, 50, 50);
 sun.addImage("sun",sunImage);
 sun.debug=true;
 earth= createSprite(500, 50, 50, 50);
 earth.addImage("earth",earthImage);
 earth.debug=true;
}

function draw() {
  
  background(138,951,193);  
if(frameCount%1===0){
  sun.scale=sun.scale+0.01;
}
if(sun.isTouching(earth)){
  earth.destroy;
}
  drawSprites();
}