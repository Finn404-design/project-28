
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var rock,ground,mango1,mango2,mango3,boy;

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,600,width, 20)
	rock = new Rock(235,420,30)
	mango1 = new Mango(925,160,30)
	mango2 = new Mango(1000,230,30)
	mango3 = new Mango(950,120,30)
	tree = new Tree(1050,340,450,500)
	launcher = new Launcher(rock.body,{x:235,y:420})
	
    
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  


  ground.display();
  tree.display();
  rock.display();
  image(boy,200,340,200,300)
  mango1.display();
  mango2.display();
  mango3.display();
  launcher.display();

  detectCollision(rock,mango1)
  detectCollision(rock,mango2)
  detectCollision(rock,mango3)
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   launcher.fly()
}

function detectCollision(lrock,lmango){
	mangobody = lmango.body.position
    rockbody = lrock.body.position
	var distance = dist(rockbody.x,rockbody.y,mangobody.x,mangobody.y)
	if(distance <= lmango.radius + lrock.radius){
		Matter.Body.setStatic(lmango.body,false)
	}
}