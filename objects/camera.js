class Camera{
	constructor(x, y, isMain){
		if (isMain){
			if (Camera.instance){
				return Camera.instance;
			}
			Camera.instance = this;
		}
		this.x = x;
		this.y = y;
		this.trackedObject = null;

		this.orthographicSize = canvas.height / 2;
	}

	zoom(targetOrthographicSize){

	}

	track(obj){
		if (obj.hasOwnProperty('x') && obj.hasOwnProperty('y')){
			this.trackedObject = obj;
			return;
		}
		throwError(this, `Invalid object, ${obj.constructor.name} to track!`);
	}
	stopTracking(){

	}

}
