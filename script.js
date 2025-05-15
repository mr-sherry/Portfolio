document.addEventListener("DOMContentLoaded", () => {
  // ✅ Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // ✅ Magnetic hover effect (only for buttons, nav links, and project links)
  const magneticElements = document.querySelectorAll(
    "a, button, .tech-card, .project-card"
  );

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });

  // ✅ Light beam effect (keep it — makes it dynamic)
  const lightBeam = document.createElement("div");
  lightBeam.style.position = "fixed";
  lightBeam.style.width = "150px";
  lightBeam.style.height = "150px";
  lightBeam.style.background = "rgba(255, 102, 0, 0.72)"; // Match highlight color
  lightBeam.style.borderRadius = "50%";
  lightBeam.style.filter = "blur(40px)";
  lightBeam.style.pointerEvents = "none";
  lightBeam.style.zIndex = "9998";
  document.body.appendChild(lightBeam);

  document.addEventListener("mousemove", (event) => {
    lightBeam.style.left = `${event.clientX - 75}px`;
    lightBeam.style.top = `${event.clientY - 75}px`;
  });
});
