const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;
var batman,imgBat,thunder,imgThud,imgThud2,imgThud3,imgThud4;
var thunderGroup;
var maxDrops=100;
function preload(){
 imgBat=loadImage ("images/walking_1.png");
 
 imgThud =loadImage("images/1.png");
 imgThud2 =loadImage("images/2.png");
 imgThud3 =loadImage("images/3.png");
 imgThud4 =loadImage("images/4.png");
}

function setup(){
    engine=Engine.create();
    createCanvas(800,700);
   batman=new Umbrella(700,500);
   batman.addImage(imgBat);  
   thunderGroup=new Group();
    Engine.run(engine);
}

function draw(){
    if(World.frameCount%50===0){
        for(var i=0;i<maxDrops;i++){
            maxDrops.push(new Drop(random(0,400),random(0,400)));
       }
    }   
}
  
   function spawnObstacles() {
    if(frameCount % 60 === 0) {
       thunder = createSprite(600,165,10,40);
     
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: thunder.addImage(imgThud);
                break;
        case 2: thunder.addImage(imgThud2);
                break;
        case 3: thunder.addImage(imgThud3);
                break;
        case 4: thunder.addImage(imgThud4);
                break;
        
        default: break;
      }
      
           
      thunder.scale = 0.5;
      thunder.lifetime = 300;
      
      thunderGroup.add(thunder);
    
    }
   }