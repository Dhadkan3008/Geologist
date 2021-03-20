
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer, ground,Sand1,Sand2,Sand3,Sand4,Sand5,Sand6,Sand7,Sand8,Sand9,Sand10,
Rubber1,Stone1;


function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,200,100,20);
	ground = new Ground(600,height,1700,30);
	Stone1 = new Stone(1000,600,60,60);
	Sand1 = new Sand(600,600,10);
	Sand2 = new Sand(602,600,10);
	Sand3 = new Sand(604,600,10);
	Sand4 = new Sand(606,600,10);
	Sand5 = new Sand(608,600,10);
	Sand6 = new Sand(610,600,10);
	Sand7 = new Sand(612,600,10);
	Sand8 = new Sand(614,600,10);
	Sand9 = new Sand(616,600,10);
	Sand10 = new Sand(618,600,10);
	Rubber1 = new Rubber(1000,600,60);
  
  
  
}


function draw() {
  background("#ADD8E6");
  Engine.update(engine);
  hammer.display();
  ground.display();
  Stone1.display();
  Sand1.display();
  Sand2.display();
  Sand3.display();
  Sand4.display();
  Sand5.display();
  Sand6.display();
  Sand7.display();
  Sand8.display();
  Sand9.display();
  Sand10.display();
  Rubber1.display();
  
  drawSprites();
 
}



