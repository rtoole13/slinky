"use strict";

function pointInCircle(x, y, xt, yt, radius){
    if (getDistanceSq(x, y, xt, yt) < Math.pow(radius,2)){
        return true;
    }
    return false;
}

function getAngleFromDir(dirX, dirY){
    if (dirY >= 0){
        return - Math.acos(dirX) * 180 / Math.PI;
    }
    else{
        return Math.acos(dirX) * 180 / Math.PI;
    }
}

function rotateVector(xi, yi, theta, degrees){
    //Rotate a vector by theta (-theta == CW, +theta == CCW)
    //returns a vector (vector.x, vector.y)
    if (degrees){
        theta *= Math.PI/180;
    }
    return {x: xi * Math.cos(theta) - yi * Math.sin(theta),
            y: xi * Math.sin(theta) + yi * Math.cos(theta)};
}

function getDistanceSq(xi, yi, xf, yf){
    //Get the distance squared between points (xi,yi) and (xf, yf)
    return getVectorMagSq(xf-xi, yf-yi);
}

function getDistance(xi, yi, xf, yf){
    //Get the distance squared between points (xi,yi) and (xf, yf)
    return Math.sqrt(getVectorMagSq(xf-xi, yf-yi));
}

function getVectorMagSq(x, y){
    //Get the magnitude squared of the vector (x,y)
    return Math.pow(x,2) + Math.pow(y,2);
}

function getVectorMag(x, y){
    //Get the magnitude of the vector (x,y)
    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
}

function dotProduct(x, y, xt, yt){
    //Calculate the dot product of two vectors, (x,y) and (xt,yt)
    return x*xt + y*yt;
}

function getAngle(x, y, xt, yt, degrees){
    //Get the angle between the two vectors, (x,y) and (xt,yt)
    var angle = Math.acos(dotProduct(x, y, xt, yt)/(getVectorMag(x,y) * getVectorMag(xt,yt)));
    if (degrees){
        return  angle * 180/Math.PI;
    }
    return angle;
}

function lerp(){

}

function bezierp(){

}
