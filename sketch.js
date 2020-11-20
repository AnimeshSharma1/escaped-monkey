// setting the objects in the game (global variables)
var monkey , monkey_running , monkeyImage ;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0 ;

function preload(){
  
  // the animations and the images are all set here
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 500);
  
  // created the groups and the objects 
  
  monkey = createSprite (70,500,20,100);
  monkey.addAnimation("moving",monkey_running) 
  monkey.scale = 0.2 ,
         
  ground = createSprite (300,500,600,20);
  ground.velocityX = -7;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background ("cyan")
  
  //setting the game conditons 
  
  if (monkey.isTouching(FoodGroup)) {
      FoodGroup.destroyEach();
    }
  
   if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -23;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground );
  
   bananas();
   obstacles();
  drawSprites();
  
  textSize(20) ;
  text("SURVIVAL TIME :  "+score,250,80);
   score = Math.ceil( frameCount/frameRate () );
}

// creating the food factory
function bananas () {
 if (frameCount % 80 === 0) {
    banana = createSprite (500,200,40,40);
    banana.y = Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1 ;
    banana.velocityX = -5 ; 
    banana.lifetime = 300;
   
    FoodGroup.add(banana);
     }   
}

// creating the enemies
function obstacles () {
  if (frameCount % 200 === 0) {
    obstacle = createSprite (600,430,40,40);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.3 ;
    obstacle.velocityX = -7 ; 
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
     }   
  
}
