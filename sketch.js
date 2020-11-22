
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var launcher,stoneObj,tree;
function preload()
{
	//stone = loadImage("sprites/stone.png");	
	//tree = loadImage("images/tree.png");
	//boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//tree(700,240,100,100);
  // mango1=new Mango(600,240,20,20);
  launcher = new Launcher(stoneObj.body,{x:200,y:200});
	Engine.run(engine);
  
}
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=lmango.r+lstone.r)
 {
Matter.Body.setStatic(lmango.body,false);
 }

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  launcher.display();
  tree.display();
  stone.display();
  boy.display();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}


