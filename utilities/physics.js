"use strict";

function getSpringForce(xA, yA, xB, yB, springConstant){
    //Returns an object with force in x direction and y direction
    var distance = getDistance(xA, yA, xB, yB);
    var dirX = (xA - xB) / distance;
    var dirY = (yA - yB) / distance;

    return {x: - springConstant * distance * dirX, y: - springConstant * distance * dirY};
}

function getSpringDamperForce(xA, yA, xB, yB, velXA, velYA, velXB, velYB, damping, jointDistance, springConstant){
    //Returns an object with force in x direction and y direction
    //Here, joint distance is intended to be fixed at jointDistance
    var distance = getDistance(xA, yA, xB, yB);
    var dirX = (xA - xB) / distance;
    var dirY = (yA - yB) / distance;
    var relVelocity = getDistance(velXA, velYA, velXB, velYB);
    var relVelX = velXA - velXB;
    var relVelY = velYA - velYB;
    var projVel = relVelX * dirX + relVelY * dirY;
    var perpVelX = relVelX - (projVel * dirX);
    var perpVelY = relVelY - (projVel * dirY);
    var ang_damping = 0.5;
    return {x: (- springConstant * (distance - jointDistance) - (damping * projVel)) * dirX - (ang_damping * perpVelX), y: (- springConstant * (distance - jointDistance) - (damping * projVel)) * dirY - (ang_damping * perpVelY)};
}
