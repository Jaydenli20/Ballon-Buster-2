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

var red, blue, pink, green


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
var computer_choice = Math.round(random(1, 4)); 
if(frameCount%100==0){

if(computer_choice==1){
redBallons();
}
else if(computer_choice==2){
greenBallons();
}
else if(computer_choice==3){
pinkBallons();
}
else if(computer_choice==4){
blueBallons(); 
}







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


}


function redBallons(){
if(frameCount%50===0){
red = createSprite(0, Math.round(random(0, 400)), 30, 30);
red.addImage("Red Ballon", ballon_red); 
red.scale = 0.1; 
red_group.add(red)
red.velocityX = 5;
}

}

function greenBallons(){
    if(frameCount%50===0){
    green = createSprite(0, Math.round(random(0, 400)), 30, 30);
    green.addImage("Green Ballon", ballon_green); 
    green.scale = 0.1; 
    green_group.add(green);
    green.velocityX = 5;
    }
    
    }


    function pinkBallons(){
        if(frameCount%50===0){
        pink = createSprite(0, Math.round(random(0, 400)), 30, 30);
        pink.addImage("Pink Ballon", ballon_pink); 
        pink_group.add(pink)
        pink.velocityX = 5;
        }
        
        }

        function blueBallons(){
            if(frameCount%50===0){
            blue = createSprite(0, Math.round(random(0, 400)), 30, 30);
            blue.addImage("Blue Ballon", ballon_blue); 
            blue.scale = 0.1; 
            blue_group.add(blue)
            blue.velocityX = 5;
            }
            
            }
        
    

function spawnArrow(){

    arrow = createSprite(750, bow.y, 30, 30); 

    arrow.addImage("Arrow", arrow_image); 
    
    arrow.velocityX = -5; 

arrow.scale = 0.2; 

arrows_group.add(arrow);
}
