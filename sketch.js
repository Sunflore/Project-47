var bA, bB,bC,bD;
var bAI, bBI, bCI,bDI;
var bg1, bg2, bg3;
var bg1I, bg2I, bg3I;
var startI, start;
var gameState="Q1";

function preload()
{
   bAI=loadImage("Images/bA.jpg");
   bBI=loadImage("Images/bB.jpg");
   bCI=loadImage("Images/bC.jpg");
   bDI=loadImage("Images/bD.jpg");

   bg1I=loadImage("Images/backgroundA.jpg");
   bg2I=loadImage("Images/backgroundB.jpg");
   bg3I=loadImage("Images/GameOver.png");

   startI=loadImage("Images/Start.jpg");
}

function setup()
{
   var canvas=createCanvas(displayWidth - 30 ,displayHeight - 95);

    bA=createSprite(330,590,100,50);
    bA.addImage(bAI);
    bA.scale=0.22;
    bB=createSprite(330,420,100,50);
    bB.addImage(bBI);
    bB.scale=0.22;
    bC=createSprite(1015,590,100,50);
    bC.addImage(bCI);
    bC.scale=0.22;
    bD=createSprite(1015,420,100,50)
    bD.addImage(bDI);
    bD.scale=0.22;
}

function draw()
{
    background(bg2I);

    drawSprites();

    if(gameState==="Q1")
    {
        if(mousePressedOver(bA)||mousePressedOver(bB)||mousePressedOver(bD))
        {
            background(bg3I);
        }
        else
        {
            gameState==="Q2";
        }

        //Q.
        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        let a = "What are Mars' two moons called?";
        text(a,displayWidth/2 - 350,displayHeight/3-100);

        //bA
        textSize(20);
        let b = "Callisto and Titan";
        text(b,253,600);

         //bB
        let c = "Europa and Io";
        text(c,253,430);

        //bC
        let d= "Phobos and Deimos";
        text(d,930,590);

        //bD
        let e= "Venus and Mercury";
        text(e,930,430);
    }
    
    if(gameState==="Q2")
    {
        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        text("The law of conservation of energy states that when one form of energy is transformed to another,",displayWidth/2 - 350,displayHeight/3-100);  
    }
}
/*function boxPressed()
{
    if(mousePressedOver(bA))
    {
        background("black");
    }

    if(mousePressedOver(bB))
    {
        background("black");
    }

    if(mousePressedOver(bC))
    {
        background("black");
    }

    if(mousePressedOver(bD))
    {
        background("black");
    }
}*/