var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1400,600);

    block1 = createSprite(300,580,360,30);
    block1.shapeColor = "blue";
    block1.scale=0.5;
   
    block2 = createSprite(600,580,200,30);
    block2.shapeColor = "orange";
    block2.scale=0.7;
    
    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(900,580,200,30);
    block3.shapeColor = "green";
    block3.scale=0.7;

    block4 = createSprite(1200,580,200,30);
    block4.shapeColor = "red";
    block4.scale=0.7;
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    //write code to add velocityX and velocityY
    ball.velocityY=4;
    ball.velocityX=-9;
}

function draw() {
    background("Teal");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "purple";
        ball.bounceOff(block1);
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "Black";
        //write code to set velocityX and velocityY of ball as 0
        ball.setVelocity(0,0);
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)){
        ball.shapeColor = "Aquamarine";
        ball.bounceOff(block3);
        music.play();
    }
    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)){
        ball.shapeColor = "Crimson";
        ball.bounceOff(block4);
        music.play();
    }
    drawSprites();
}
