class Slinky{
    constructor(x, y, length, linkMass, linkRadius, initSpacing, springConst){
        this.x = x;
        this.y = y;
        this.length = length;
        this.linkMass = linkMass;
        this.linkRadius = linkRadius;
        this.initSpacing = initSpacing;
        this.springConst = springConst;
        this.links = [];

        for (var i = 0; i < this.length; i++){
            var obj = new Link(this.x + (this.initSpacing * i), this.y, this.linkMass, this.linkRadius, false, 'red');
            this.links.push(obj);
        }
        this.links[0].pinned = false;
        this.links[this.length - 1].pinned = false;
        this.hangTime = 5000;
        this.beginHang = Date.now();
        this.dropped = false;
    }
    update(dt){
        if (mouseX != undefined && mouseY != undefined){
            this.links[0].x = mouseX;
            this.links[0].y = mouseY;
        }

        // top link
        var springForce, springForceCont;
        //springForceCont = getSpringForce(this.links[0].x, this.links[0].y, this.links[1].x, this.links[1].y, this.springConst);
        springForceCont = getSpringDamperForce(this.links[0].x, this.links[0].y, this.links[1].x, this.links[1].y, this.links[0].velX, this.links[0].velY, this.links[1].velX, this.links[1].velY, dampingConst, this.initSpacing, this.springConst);
        springForce = springForceCont;
        //this.links[0].update(springForce, dt);


        for (var i = 1; i < this.length - 1; i++){
            var thisLink = this.links[i];

            //use negative of last used spring force.
            springForce.x = -1 * springForceCont.x;
            springForce.y = -1 * springForceCont.y;

            //springForceCont = getSpringForce(thisLink.x, thisLink.y, this.links[i + 1].x, this.links[i + 1].y, this.springConst);
            springForceCont = getSpringDamperForce(thisLink.x, thisLink.y, this.links[i + 1].x, this.links[i + 1].y, thisLink.velX, thisLink.velY, this.links[i + 1].velX, this.links[i + 1].velY, dampingConst, this.initSpacing, this.springConst);
            springForce.x += springForceCont.x;
            springForce.y += springForceCont.y;

            thisLink.update(springForce, dt);
        }

        //use negative of last used spring force.
        springForce.x = -1 * springForceCont.x;
        springForce.y = -1 * springForceCont.y;
        this.links[this.length - 1].update(springForce, dt);

    }
    getEndNode(){
        return this.links[this.length - 1];
    }
}

class Link{
	constructor(x, y, mass, radius, pinned, color){
		this.x = x;
		this.y = y;
        this.velX = 0;
        this.velY = 0;
        this.mass = mass;
        this.mass_inv = 1 / mass;
		this.radius = radius;
        this.pinned = pinned;
		this.color = color;

	}
	update(springForce, dt){
	   if (this.pinned){
            return;
       }
       var forceX = springForce.x;
       var forceY = springForce.y + g;

       this.velX += forceX * this.mass_inv * dt - (drag * this.velX); //air resistance helps..
       this.velY += forceY * this.mass_inv * dt - (drag * this.velY);

       this.x += this.velX;
       this.y += this.velY;
    }


}
