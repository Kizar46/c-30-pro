class Roof{


    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(400,100,400,30,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push ()
        fill("brown");
        rectMode(CENTER);
        
        rect(this.body.position.x,this.body.position.y, 400,30);
        pop ()
      }


}