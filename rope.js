class Rope{

    constructor(x,y,z)
    {
       
        var options={
            bodyA:x,
            bodyB:y,
            ponitB:{x:z,y:0},
            length:255,
           
           
        }





        this.rope= Constraint.create(options);
        
        World.add(world,this.rope)
        this.ponitB=z
    }
display(){
   push ()
    strokeWeight(3)
    line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,
        this.rope.bodyB.position.x+this.ponitB,this.rope.bodyB.position.y)
pop ()

}



}