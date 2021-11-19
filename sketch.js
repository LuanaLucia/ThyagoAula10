
var trex ,trex_running, trexMorto;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trexMorto = loadAnimation("trex_collided.png")
}

function setup(){
  createCanvas(600,400)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("morto", trexMorto);
}

function draw(){
  background("white")
  drawSprites();

  if(keyDown("space")){
    trex.velocityY = -13
  }
trex.velocityY += 0.9
}