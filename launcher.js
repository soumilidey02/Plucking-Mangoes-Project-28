class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.launcher = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.launcher);
    }
    
    fly(){
    this.launcher.bodyA=null;
    }
    display(){
        if (this.launcher.bodyA){
            var posA = this.launcher.bodyA.position;
            var posB = this.pointB;
            strokeWeight(4);
            line(posA.x, posA.y, posB.x, posB.y);
        }
        
    }
    
}
