console.log("Hello World! (from create-block-movable block)");

let movable = document.querySelectorAll(".movable");

movable.forEach((elem) => {
	console.log("movable elem");
	let isMoving = false;
	let x;
	let y;
	elem.addEventListener("mousedown", function (e) {
		console.log("mousedown");
		isMoving = true;
	});

	window.addEventListener("mousemove", function (e) {
		console.log("mousemove");
		if (isMoving) {
			//get current translateX and translateY values
			let style = window.getComputedStyle(elem);
			var matrix = new WebKitCSSMatrix(style.webkitTransform);
			let currentTX = matrix.m41;
			let currentTY = matrix.m42;
			let currentX = e.clientX;
			//get difference in mouse positions, add or subtract the difference to the element's translateX and translateY values
			if (currentX > x) {
				currentX = currentTX + (currentX - x);
			} else {
				currentX = currentTX - (x - currentX);
			}
			let currentY = e.clientY;
			if (currentY > y) {
				currentY = currentTY + (currentY - y);
			} else {
				currentY = currentTY - (y - currentY);
			}
			x = currentX;
			y = currentY;

			elem.style.transform = "translate(" + currentX + "px," + currentY + "px)";
		}
	});

	window.addEventListener("mouseup", function (e) {
		console.log("mouseup");
		isMoving = false;
	});

	window.addEventListener("mousemove", function (e) {
		x = e.clientX;
		y = e.clientY;
	});
});
