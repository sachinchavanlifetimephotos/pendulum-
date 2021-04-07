const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
var roof1; 
var ball1; 
var rope1;  


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    roof1=new Roof(400,100,500,20); 
    roof1.shapeColor="black"; 
     
  rope1=new Strain(200,200,10,200); 

    ball1=new Ball(200,200,70); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  drawSprites(); 
  roof1.display(); 
  rope1.display(); 
   
  ball1.display(); 
 
}



