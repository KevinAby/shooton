class Canon{
    constructor(x, y, r) {
        var options = {
            'restitution':0.7,
            'friction':1.2,
            'density':3.4
        }
        this.body = Bodies.circle(x, y, r, options);
         this.r=r
        //this.image = loadImage("sprites/polygon.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        //push();
        
        ellipseMode(RADIUS);
    fill("yellow");
    ellipse(pos.x, pos.y, this.r);
     //imageMode(CENTER);
        //image(this.image,this.body.position.x, this.body.position.y, this.width+20, this.height+20);
        //pop();
      }
}