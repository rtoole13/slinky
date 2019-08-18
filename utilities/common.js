"use strict";

//------Numbers------//
function getRandomInt(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFloat(min, max){
	return Math.random() * (max - min) + min;
}

function clampFloat(value, min, max){
    return Math.min(max, Math.max(value, min));
}

//------Strings------//
function capitalizeFirstLetter(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

//------Organization------//
function getRandomID(idLength) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < idLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function getUniqueID(idLength, dict){
	var id = getRandomID(idLength);

	if (id in dict){
		return getUniqueID(idLength, dict);
	}
	else{
		return id;
	}
}

function sortDictByValue(thisDict){
	//Given a dict, thisDict, of numbers, sort and return
	//a list with the smallest number first
	var sortedList, valA, valB, unsorted = true;
	var sortedList = Object.keys(thisDict);

	if (sortedList.length < 2){
		return sortedList;
	}
	while (unsorted){
		unsorted = false;
		for (var i = 0; i < sortedList.length - 1; i++){
			valA = thisDict[sortedList[i]];
			valB = thisDict[sortedList[i + 1]];
			if (valB < valA){
				var temp = sortedList[i+1];
				sortedList[i+1] = sortedList[i];
				sortedList[i] = temp;
				unsorted = true;
			}
		}
	}
	return sortedList;
}
