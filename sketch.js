
var monkey , monkey_running;
var bananaImage, bananaGroup;
var rocksImage, rocksGroup;
var score = 0;

function preload(){
  
  monkey_running =                     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rocksImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey = createSprite(50, 150, 20, 50);
  monkey.addAnimation("running", monkey_running );
  monkey.scale = 0.1;  
  
  ground = createSprite(590,190,1100,20);
  ground.velocityX = -7;
  ground.x = ground.width /2;
  
  bananaGroup = createGroup(); 
}

function draw() {
  createCanvas(600, 200);
  
  ground.velocityX = -(4 + 3* score/100)
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  spawnBananas();
  spawnRocks();
  
  if(keyDown("space")){
    monkey.y = -5;  
  } 
  monkey.y = monkey.y + 5;
  monkey.collide(ground);
  
  text("Surival Time : " + score, 10, 50);
  score = score + Math.round(getFrameRate()/60);
  
  drawSprites();
}

function spawnBananas(){
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,150,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;

    banana.lifetime = 200;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
    bananaGroup.add(banana);
    }
}

function spawnRocks(){
  if(frameCount % 300 === 0){
    var rocks = createSprite(570, 150, 20, 20)
    rocks.addImage(rocksImage);
    rocks.scale = 0.25;
    rocks.velocityX = -3;
  }
}