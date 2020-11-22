class Stone{
 constructor (stone){
 var options={
 isStatic:false,
 restitution:0,
 friction:1,
 density:1.2
 }
 this.image=loadImage("images/stone.png")
 }
}
 function keyPressed(){
 if(keyCode===32){
  Matter.Body.setPosition(stoneObj.body,{x:235, y:420});
  launcherObject.attach(stoneObj.body);
 }
 }
