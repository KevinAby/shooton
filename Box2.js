
class Box2 {
  constructor(x,y,width,height) {
    this.Visibility = 255
    var options = {
        //isStatic: false
        density:2.1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
     

     
     
    rectMode(CENTER);
    fill("green");
    rect(pos.x, pos.y, this.width, this.height);
     

    
    
    }

 };