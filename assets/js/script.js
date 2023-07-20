const container = document.getElementById("top");

container.addEventListener("mousemove", createRipple);

function createRipple(event) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = event.clientX - 25 + "px"; // Adjust the offset for the rocket's center
  ripple.style.top = event.clientY - 25 + "px"; // Adjust the offset for the rocket's center
  container.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    container.removeChild(ripple);
  });
}
