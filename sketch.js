
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstaceImage
var ground
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   score = 0;
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
   monkey = createSprite(50,340,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,380,700,20);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  

  
}


function draw() {
background("white");
  food();
  obstacles();
  if(ground.x<0){
    ground.x = ground.width /2;
  }
   
  if(keyDown("space")) {
        monkey.velocityY = -12;
}
   monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(ground);
  drawSprites();
}

function food() {
  if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
  banana.y = Math.round(random(180,220));
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX = -3;
  banana.lifetime = 200;
  bananaGroup.add(banana);
  }
}
function obstacles(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,358,20,50);

  obstacle.addImage(obstaceImage);
  obstacle.scale=0.1;
  obstacle.velocityX = -3;
  obstacle.lifetime = 200;
  obstacleGroup.add(obstacle);
}
}




