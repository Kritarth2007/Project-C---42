const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;
var drops = []
var thunder1,thunder2,thunder3,thunder4
var r 
var count

function preload(){
    thunder1 = loadImage("thunderbolt/1.png")
    thunder2 = loadImage("thunderbolt/2.png")
    thunder3 = loadImage("thunderbolt/3.png")
    thunder4 = loadImage("thunderbolt/4.png")
}

function setup(){
    createCanvas (400,700)
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(200,500)
    if (frameCount%150 === 0) {
        for (var i = 0; i<= 100;i++) {
       drops.push (new Drops (random(0,400),random(0,400)))
        }
    }
}

function draw(){
    Engine.update (engine)
    background (0)

     r = Math.round (random (1,4))
     if (frameCount%80 === 0){
         count = frameCount
      thunder = createSprite(random (10,370),random (10,30))
     switch  (r) {
         case 1:thunder.addImage (thunder1)
         break
         case 2:thunder.addImage (thunder2)
         break
         case 3:thunder.addImage (thunder3)
         break
         case 4:thunder.addImage (thunder4)
         break
     }
     thunder.scale =  random (0.4,0.6)
     }
     if (count+10 === frameCount&&thunder){
         thunder.destroy ()
     }
     umbrella.display ()
     for (var i = 0;i<= 100;i++){
         drops [i].showDrop ()
         drops [i].updateY ()
     }
     drawSprites ()
}   

