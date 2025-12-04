// Animate placeholder text like typing effect
const placeholderText = "Search for restaurant, cuisine or a dish";
const input = document.querySelector("input");

let i = 0;
function typePlaceholder() {
  if (i < placeholderText.length) {
    input.setAttribute("placeholder", placeholderText.slice(0, i + 1));
    i++;
    setTimeout(typePlaceholder, 70); // typing speed
  }
}
typePlaceholder();

// Add hover animation to header links
document.querySelectorAll("header ul li a").forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1.1)";
  });
  link.addEventListener("mouseout", () => {
    link.style.transform = "scale(1)";
  });
});

// Animate logo on load
window.addEventListener("load", () => {
  const logo = document.querySelector(".logo img");
  logo.style.opacity = 0;
  logo.style.transform = "scale(0.5)";
  setTimeout(() => {
    logo.style.transition = "all 0.5s ease-out";
    logo.style.opacity = 1;
    logo.style.transform = "scale(1)";
  }, 200);
});
