class dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dustbinWidth=170;
        this.dustbinHeight=200;
        this.wallthickness=20;
        this.angle=0;
        this.image=loadImage("dustbingreen.png");

        this.bottombody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallthickness,{isStatic:true});
        this.leftbody=Bodies.rectangle(this.x-this.dustbinWidth/2+20,this.y-this.dustbinHeight/2,this.wallthickness,this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.leftbody,this.angle);

        this.rightbody=Bodies.rectangle(this.x+this.dustbinWidth/2-20,this.y-this.dustbinHeight/2,this.wallthickness,this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.rightbody,-1*this.angle);
        World.add(world,this.bottombody);
        World.add(world,this.rightbody);
        World.add(world,this.leftbody);
    }
    display(){
        var bottomPos=this.bottombody.position;
        var leftPos=this.leftbody.position;
        var rightPos=this.rightbody.position;

        push()
        translate(leftPos.x,leftPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke("blue");
        fill("blue");
        rotate(this.angle);
        rect(0,0,this.wallthickness,this.dustbinHeight);
        pop();

        

        push();
        translate(rightPos.x,rightPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke("blue");
        fill("blue");
        rotate(-1*this.angle);
        rect(0,0,this.wallthickness,this.dustbinHeight);
        pop();

        push();
        translate(bottomPos.x,bottomPos.y);
        imageMode(CENTER);
        stroke("blue");
        fill("blue");
        image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight+20);
        pop();



    }
}
