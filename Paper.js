class Paper{
  constructor(x,y,radius){
      var options={
          'restitution':0.8,
          'friction':1.0,
          'density':1.5
      
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body=Bodies.circle(x,y,radius,options);
      
      World.add(world,this.body);
  }
  
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    
    fill("red");
    ellipse(0,0,this.radius,this.radius);
    pop();
  }
  };