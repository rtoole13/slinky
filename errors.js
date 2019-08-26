function throwError(source, message){
	var sourceType;
	switch(typeof(source)){
		case "function":
			sourceType = source.name;
			break;
		case "object":
			sourceType = source.constructor.name;
			break;
		default:
			throw new Error(`Unexpected source type, ${typeof(source)}!`);
	}
	throw new Error(`${sourceType} Error: ${message}`);
}
