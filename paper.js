class PAPER {
    constructor(x,y){

        this.options = {
            isStatic: false,
            restitution: 0.3,
            density: 0.5,
            friction: 1.2
        }

        this.raduis = 15;

        this.bdy = Bodies.circle(x,y,this.raduis,this.options);
        World.add(world, this.bdy);
    }

    display(){

        var pos = this.bdy.position

        ellipseMode(CENTER);
        fill(255,255,255);
        noStroke();
        ellipse(pos.x,pos.y,this.raduis*2);
    }
}