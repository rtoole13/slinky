class SlinkyProjectile{
    constructor(link){
        for (var attr in link){
            this[attr] = link[attr];
        }
    }
    update(dt){
        this.velX -= (drag * this.velX);
        this.velY += g * this.mass_inv * dt - (drag * this.velY);

        this.x += this.velX;
        this.y += this.velY;
    }
}
