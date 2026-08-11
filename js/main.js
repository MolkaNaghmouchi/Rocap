document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    formNote.textContent = "Merci de remplir les champs obligatoires (nom, email, besoin).";
    formNote.style.color = "#d63031";
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const company = document.getElementById("company").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Demande d'audit — ${company || name}`);
  const body = encodeURIComponent(
    `Nom : ${name}\nEntreprise : ${company || "-"}\nEmail : ${email}\n\nBesoin :\n${message}`
  );

  window.location.href = `mailto:contact@rocap.io?subject=${subject}&body=${body}`;

  formNote.style.color = "";
  formNote.textContent = "Votre client mail va s'ouvrir pour envoyer la demande à contact@rocap.io.";
  form.reset();
});
