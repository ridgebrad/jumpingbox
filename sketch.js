var edges;
var canvas;
var music;
var wall1,wall2,wall3,wall4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 //create 4 different surfaces
music.play();

 
wall1=createSprite(150,585,120,50);
wall1.shapeColor="blue";

 wall2=createSprite(300,585,120,50);
wall2.shapeColor="yellow";

wall3=createSprite(450,585,120,50);
wall3.shapeColor="pink";

wall4=createSprite(600,585,120,50);
wall4.shapeColor="green";

//create box sprite and give velocity
box=createSprite(400,300,20,20);
box.shapeColor="white";
box.velocityX=5;
box.velocityY=-4;


}




function draw() {
    background(rgb(169,169,169))
 edges=createEdgeSprites(); 
 box.bounceOff(edges);
   
if(wall3.isTouching(box) && box.bounceOff(wall3)){
box.shapeColor="pink";
music.stop();
} 

if(wall2.isTouching(box) && box.bounceOff(wall2)){
    box.shapeColor="yellow";
    music.stop();
} 

if(wall4.isTouching(box) && box.bounceOff(wall4)){
box.shapeColor="green";

music.stop(); 
} 

if(wall1.isTouching(box) && box.bounceOff(wall1)){
box.shapeColor="blue";

music.stop();
} 





drawSprites();

}