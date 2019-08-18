function getMousePosition(e){
	var rect = canvas.getBoundingClientRect(),
        root = document.documentElement;

	mouseX = e.pageX - rect.left - root.scrollLeft;
	mouseY = e.pageY - rect.top - root.scrollTop;
}

function handleMouseDown(e){
	switch(e.button){
		case 0:
			handleLeftClick();
			break;

		case 2:
			handleRightClickDown();
			break;
	}
}

function handleLeftClick(){
    console.log('Left click!');
}

function handleRightClickDown(){
	console.log('Right click!');
}

function handleRightClickUp(e){
	e.preventDefault();
	console.log('Right click release!');
}
