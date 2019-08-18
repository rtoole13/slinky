class Camera{
	constructor(x, y, orthographicSize){
		this.x = x;
		this.y = y;
		this.orthographicSize = orthographicSize;
		this.trackedObject = null;
	}

	zoom(targetOrthographicSize){

	}

	track(obj){
		if (obj.hasOwnProperty('x') && obj.hasOwnProperty('y')){
			this.trackedObject = obj;
			return;
		}
		throw new Error()
	}
	stopTracking(){

	}

}


