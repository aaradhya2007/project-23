var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxpiece1,boxpiece2,boxpiece3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2,80,10,10)
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	boxpiece2=createSprite(280,610,20,100,{isStatic:true})
	boxpiece2.shapeColor=color("red")
	boxpiece3=createSprite(480,610,20,100,{isStatic:true})
boxpiece3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true})
	 World.add(world, packageBody);

	 boxpiece1=createSprite(380,655,200,10,{isStatic:true})
	 boxpiece1.shapeColor=color("red")
	 World.add(world, boxpiece1)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  packageSprite.x=packageBody.position.x
  packageSprite.y=packageBody.position.y
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)
	Matter.Body.setStatic(boxpiece1,true)

	

  }
}



