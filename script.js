const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const form = document.querySelector("#appointment-form");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const date = String(data.get("date") || "").trim();
  const message = String(data.get("message") || "").trim();

  const lines = [
    "Hello Care Plus Dental Clinic, I would like to request an appointment.",
    name ? `Name: ${name}` : "",
    phone ? `Phone: ${phone}` : "",
    date ? `Preferred date: ${date}` : "",
    message ? `Concern: ${message}` : "",
  ].filter(Boolean);

  window.location.href = `https://wa.me/918144704298?text=${encodeURIComponent(lines.join("\n"))}`;
});
