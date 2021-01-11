
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1;
var world,engine;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper1=new paper(100,100,50);
   ground1=new ground(width/2,670,width,20);
   dustbin1=new dustbin(1200,650);

	Engine.run(engine);

  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("lightblue");
  
 ground1.display();
  dustbin1.display();
  
  paper1.display();
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:20,y:-75});
  }
}



