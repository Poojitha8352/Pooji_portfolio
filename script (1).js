const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    themeBtn.textContent = isLight ? "🌙" : "☀️";
  });
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Highlight the current page in the navigation.
const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("#navLinks a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Small typing animation on the home page.
const typing = document.getElementById("typing");

if (typing) {
  const words = [
    "Full Stack Developer",
    "Python Programmer",
    "Web Developer"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const word = words[wordIndex];

    typing.textContent = word.substring(0, charIndex);

    if (!deleting) {
      charIndex++;

      if (charIndex > word.length) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      charIndex--;

      if (charIndex < 0) {
        charIndex = 0;
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, deleting ? 45 : 85);
  }

  typeEffect();
}