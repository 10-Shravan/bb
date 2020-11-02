class Drop{
    constructor(x,y,w,h){
        this.width=w;
        this.height=h;
         var options={
             isStatic:true,
             friction:0.1
         }
        this.drop=Bodies.circle(options);
        this.drop=this.body;
        World.add(world,this.body);
    }
    draw(){
        ellipseMode(CENTER)
        ellipse(this.body.x,this.body.y);
        if(this.drop.position.y>this.height){
            Matter.body.setPosition(this.drop,{x:random(0,400),y:random(0,400)});
        }
    }
}