function throwError(source, message){
	var sourceType = source.constructor.name;
	console.log(`${sourceType} Error: ${message}`);
}
