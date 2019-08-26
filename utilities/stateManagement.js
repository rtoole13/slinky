function addGameObject(obj){
    if (!("x" in obj) || !("y" in obj)){
        throwError(addGameObject, `gameObjects must have x and y coordinates! ${obj.constructor.name} does not!`);
    }
    if ((!("width" in obj) && !("height" in obj)) &&
        !("radius" in obj) &&
        !("vertices" in obj)){
            throwError(addGameObject, `gameObjects must have width and height, vertices, or a radius defined! ${obj.constructor.name} does not!`);
    }
    var id = getUniqueID(5, gameObjects);
    obj.gameObjectID = id;
    gameObjects[id] = obj;
    return obj;
}
