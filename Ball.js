class Ball{ 
    constructor(x,y,radius){ 
        var options = { 
            restitution:0, 
            isStatic: false, 
            friction:1, 
            density:1.2, 
        } 
        this.body = Bodies.circle(x,y,radius); 
        
        World.add(world, this.body); 

    }
   display(){ 
       var pos=this.body.position; 
       var angles=this.body.angle; 
       push ();
       translate (pos.x,pos.y); 
       rotate (angles); 
       pop ();    
       
   }
} 
