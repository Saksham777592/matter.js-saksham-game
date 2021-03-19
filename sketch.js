const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground1, ground2, ground3, ground4, ground5, ground6, ground7, ground8, ground9, ground10,
    ground11, ground12, ground13;



function preload() {
    backgroundImg = loadImage("images/background.jpg");
}

function setup() {
    createCanvas(6300, displayHeight - 150);
    engine = Engine.create();
    world = engine.world;

    player = new Player(100, displayHeight - 560, 50);

    ground1 = new Ground(500, displayHeight - 205, 1000, 110);
    ground2 = new Ground(1200, displayHeight - 200, 150, 50);
    ground3 = new Ground(1450, displayHeight - 250, 150, 50);
    ground4 = new Ground(1800, displayHeight - 200, 150, 50);
    ground5 = new Ground(2300, displayHeight - 250, 500, 50);
    ground6 = new Ground(2900, displayHeight - 205, 500, 110);
    ground7 = new Ground(3280, displayHeight - 300, 250, 50);
    ground8 = new Ground(4500, displayHeight - 205, 500, 110);
    ground9 = new Ground(4950, displayHeight - 260, 150, 50);
    ground10 = new Ground(5200, displayHeight - 205, 150, 50);
    ground11 = new Ground(5500, displayHeight - 260, 150, 50);
    ground12 = new Ground(5750, displayHeight - 310, 150, 50);
    ground13 = new Ground(6200, displayHeight -205, 250, 110);

    Engine.run(engine);
}

function draw() {
    background(backgroundImg);

    player.display();

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();
    ground7.display();
    ground8.display();
    ground9.display();
    ground10.display();
    ground11.display();
    ground12.display();
    ground13.display();

}

function keyPressed() {
    if(keyCode === 68) {
        Body.applyForce(player.body, player.body.position, {x: 10, y: 0});
    }
    if(keyCode === 65) {
        Body.applyForce(player.body, player.body.position, {x: -10, y: 0});
    }
    if(keyCode === 87) {
        Body.applyForce(player.body, player.body.position, {x: 0, y: -100});
    }
}
