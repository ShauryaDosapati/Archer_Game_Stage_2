const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,
    world;
var canvas;
var player,
    playerBase;
var playerArcher
var playerArrow


function preload() {
    backgroundImg = loadImage("./assets/background.png");
    baseimage = loadImage("./assets/base.png");
    playerimage = loadImage("./assets/player.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    angleMode(DEGREES);

    var options = {
        isStatic: true
    };


    playerBase = Bodies.rectangle(200, 350, 180, 150, options);
    World.add(world, playerBase);
    playerArcher = new PlayerArcher(playerBase.position.x + 80 + 60, 250, 40, 60  );
    playerArrow = new PlayerArrow(playerArcher.x, playerArcher.y);

}

function draw() {
    background(backgroundImg);

    Engine.update(engine);
    image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150)
    image(playerimage, playerBase.position.x + 80, playerBase.position.y - 150, 50, 180)


    // player.display();
    playerArcher.display();
    playerArrow.display();

    // Title
    fill("#FFFF");
    textAlign("center");
    textSize(40);
    text("EPIC ARCHERY", width / 2, 100);
}
function keyReleased() {
    console.log('keyReleased ->', keyCode);
    if (keyCode === LEFT_ARROW) {
        console.log("inside left arrow keycode function-->")
        playerArrow.shoot();
    }
}
