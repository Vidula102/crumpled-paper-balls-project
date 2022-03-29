
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide, rightSide;

function preload(){
	
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

	ball = Bodies.circle(100, 100, 10, ball_options);
	World.add(world,ball);
	console.log(ball);

	groundObj = new Ground(width/2, 570, width, 20);
	leftSide = new Ground(1100, 500, 20, 120);
	rightSide = new Ground(1400, 500, 20, 120);

	console.log(ball);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine); 

  ellipse(ball.position.x, ball.position.y, 30); 

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW)  {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:5, y:5});
	}
}



