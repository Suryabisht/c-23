class Ground {
    constructor(x,y,width,height) {
        var option2 = {
            isStatic : true
        }
    
    this.body = Bodies.rectangle(x,y,width,height,option2) ;
    
    this.w = width ; 
    this.h = height ;
    
    World.add(world,this.body);
    }
    display() {
      var pos = this.body.position ;
      rectMode(CENTER) ;

      rect(pos.x,pos.y,this.w,this.h) ;
    }
    
}