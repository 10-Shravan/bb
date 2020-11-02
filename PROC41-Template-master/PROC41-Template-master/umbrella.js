class Umbrella{
    constructor(x,y){
        this.umbrella=Bodies.circle({isStatic:true});
        this.umbrella=this.body;
        World.add(world,this.body);
    }
    draw(){
        ellipseMode(CENTER)
        ellipse(this.body.x,this.body.y);
    }
}