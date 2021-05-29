class Bob{

    constructor(x, y, radius) {
        var options = {
            
            restitution:1,
            density:0.8,
            friction:0
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
        
        push();
        fill ("pink")
        ellipseMode(CENTER);
        circle(this.body.position.x, this.body.position.y,this.radius*2 );
        pop();
      }
    }
