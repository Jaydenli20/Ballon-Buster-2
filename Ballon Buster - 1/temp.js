var arrows_group; 

var red_group, pink_group, green_group, blue_group; 

var field;
var field_image;

var bow;
var bow_image;

var arrow;
var arrow_image;

var ballon;
var ballon_blue, ballon_green, ballon_pink, ballon_red;

var count = 0; 


function preload(){
field_image = loadImage("background0.png");

bow_image = loadImage("bow0.png");

arrow_image = loadImage("arrow0.png");

ballon_blue = loadImage("blue_balloon0.png");

ballon_green = loadImage("green_balloon0.png");

ballon_pink = loadImage("pink_balloon0.png");

ballon_red = loadImage("red_balloon0.png");
}


function setup(){
arrows_group = new Group()

red_group = new Group();

pink_group = new Group();

green_group = new Group();

blue_group = new Group(); 
createCanvas(800, 800); 
field = createSprite(400, 400, 800, 800); 

field.addImage("background", field_image); 

field.scale = 2;


bow = createSprite(750, 400, 30, 30);

bow.addImage("Bow", bow_image); 

bow.scale = 1.5;


}

function draw(){
background("yellow");


bow.y = mouseY; 

if(keyDown("space")){
spawnArrow()
}

if(arrows_group.isTouching(red_group)){  
red_group.destroyEach(); 
arrows_group.destroyEach();   
}

if(arrows_group.isTouching(green_group)){
green_group.destroyEach();
arrows_group.destroyEach(); 
}
if(arrows_group.isTouching(pink_group)){
pink_group.destroyEach(); 
arrows_group.destroyEach();
} 

if(arrows_group.isTouching(blue_group)){
blue_group.destroyEach();
arrows_group.destroyEach(); 
}

drawSprites(); 

spwanBallons(); 

}


function spwanBallons(){
if(frameCount%50===0){
ballon = createSprite(50, 400, 30, 30);

ballon.velocityX = +5;
red_group.add(ballon);

pink_group.add(ballon);

green_group.add(ballon);

blue_group.add(ballon); 

var select_number = Math.round(random(1, 4))
switch(select_number){
case 1: ballon.addImage("Blue Balloon", ballon_blue);
ballon.scale = 0.2; 

ballon.y = Math.round(random(100, 700))
break;

case 2: ballon.addImage("Ballon Green", ballon_green);
ballon.scale = 0.2; 

ballon.y = Math.round(random(100, 700))
break;

case 3: ballon.addImage("Pink Ballon", ballon_pink);
ballon.scale = 1.5; 

ballon.y = Math.round(random(100, 700))
break;

case 4: ballon.addImage("Red Ballon", ballon_red);
ballon.scale = 0.2; 

ballon.y = Math.round(random(100, 700))
break;

default:


}

ballon.lifeTime = 0; 
}


}

function spawnArrow(){

    arrow = createSprite(750, bow.y, 30, 30); 

    arrow.addImage("Arrow", arrow_image); 
    
    arrow.velocityX = -5; 

arrow.scale = 0.2; 

arrows_group.add(arrow);
}
