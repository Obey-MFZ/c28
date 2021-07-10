class launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:50,
            stiffness:1
        }
        this.launcher= Matter.Constraint.create(options);
        this.pointB=pointBWorld.add(world,this.launcher)
        
    }
display(){
strokeWeight(3);
if(this.launcher.bodyA){
line(this.launcher.bodyA.position.x,
    this.launcher.bodyA.position.y,
    this.pointB.x,this.pointB.y)

}



}



}