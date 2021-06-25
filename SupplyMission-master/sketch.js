var paperobject 
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine 
var world 
var bin 
function preload()
{
bin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	var packageSprite_options ={
		restitution: 5 
	}

	box1 = createSprite(700,650,100,20 ); 
	box1.shapeColor = "red"
	box2 = createSprite(650, 620,20,80); 
	box2.shapeColor = "red"
	box3 = createSprite(750,620,20,80); 
	box3.shapeColor = "red"


	engine = Engine.create();
	world = engine.world;

	paperobject= new paper (200,450,70); 
	var ground_options ={
		isStatic: false
	}
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	
}


function draw() {
	background(255); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,10);
  drawSprites();
  image(bin, 650, 550, 100, 100 )
  paperobject.display(); 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:50,y:-50}); 
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	 
  }
  
}



