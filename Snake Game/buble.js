/* jshint esversion: 6 */
const bubbleContainer = document.getElementById("bubble-container");

function createBubble() {
	if (bubbleContainer.childNodes.length > 50) {
		return;
	}
	const bubble = document.createElement("div");
	bubble.classList.add("bubble");
	const size = `${Math.random() * 60 + 20}px`;
	bubble.style.width = size;
	bubble.style.height = size;
	bubble.style.left = `${Math.random() * 100}%`;
	bubble.style.animationDuration = `${
		(Math.random() * 8 + 5) * (parseFloat(size) / 80)
	}s`;
	bubble.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.3)`;
	const swayAmplitude = `${(Math.random() - 0.5) * 100}px`;
	bubble.style.setProperty("--sway-amplitude", swayAmplitude);
	const reflectPos = Math.random() * 40 + 20;
	bubble.style.setProperty("--reflect-pos", `${reflectPos}%`);
	bubble.addEventListener("mouseover", () => {
		bubble.style.transform = "scale(1.1)";
		setTimeout(() => {
			bubble.style.transform = "";
		}, 500);
	});
	bubbleContainer.appendChild(bubble);
	setTimeout(() => {
		bubble.remove();
	}, (Math.random() * 8 + 5) * 1000);
}

function popBubble(event) {
	const bubble = event.target;
	if (bubble.classList.contains("bubble")) {
		bubble.classList.add("pop");
		setTimeout(() => {
			bubble.remove();
		}, 200);
	}
}
bubbleContainer.addEventListener("click", popBubble);
setInterval(createBubble, 500);
bubbleContainer.addEventListener("click", function (e) {
	const ripple = document.createElement("div");
	ripple.classList.add("ripple");
	ripple.style.left = `${e.clientX - bubbleContainer.offsetLeft}px`;
	ripple.style.top = `${e.clientY - bubbleContainer.offsetTop}px`;
	bubbleContainer.appendChild(ripple);
	setTimeout(() => {
		ripple.remove();
	}, 1000);
});
