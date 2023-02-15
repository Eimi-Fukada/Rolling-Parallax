let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let bc1 = document.getElementById("bc1");
let bc4 = document.getElementById("bc4");
let bc5 = document.getElementById("bc5");

window.addEventListener("scroll", () => {
  const value = window.scrollY;
  text.style.marginTop = value * 1.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  bc1.style.top = value * 0.5 + "px";
  bc4.style.left = value * -1.5 + "px";
  bc5.style.left = value * 1.5 + "px";
});
