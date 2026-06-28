// Cache commonly used page elements.
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Toggle the mobile navigation menu.
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";

    mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenuButton.classList.toggle("menu-open");
    mobileMenu.classList.toggle("hidden");
  });
}

// Close the mobile menu after a mobile link is selected.
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.classList.remove("menu-open");
    mobileMenuButton.setAttribute("aria-expanded", "false");
  });
});

// Smooth-scroll anchor links with support for older browsers.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (!targetElement) return;

    event.preventDefault();

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Basic form handling placeholder.
// Replace this with a fetch request to a Cloudflare Worker, Formspree endpoint, or CRM webhook.
if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");

    formMessage.textContent = `Thank you${name ? `, ${name}` : ""}. Your consultation request has been received.`;
    formMessage.classList.remove("hidden");

    contactForm.reset();
  });
}
