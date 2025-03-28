let ClickCount = 0;

document.querySelector("#btn").onclick = function() {
	ClickCount += 1
	document.querySelector("#counter").innerHTML = "Click count: " + ClickCount
}