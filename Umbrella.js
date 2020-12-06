class Umbrella {
    constructor(x,y) {
        var options = {
            isStatic:true
        }
        this.image = loadImage ("Walking Frame/walking_1.png")
        this.body = Bodies.circle(x,y,50,options);
        this.r = 50
        World.add(world, this.body);
      }
      display(){
    
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y+100,300,300);
             }
      updateY () {
      if (this.body.position.y>height ){
          Matter.Body.setPosition (this.body,{x:random (0,400),y:random (0,400)})
      }
      }
    }
    