// ===== Modal Alert =====
const modalAlert = document.getElementById('modal-alert');
const tombolTutup = document.getElementById('tombol-tutup');

function tampilkanModalAlert() {
  modalAlert.classList.remove("hidden");
}

function tutupModalAlert() {
  modalAlert.classList.add("hidden");
}

tombolTutup.addEventListener("click", tutupModalAlert);


// ===== Modal Gambar (About Section) =====
const aboutImage = document.getElementById('aboutImage');
const imageModal = document.getElementById('image-modal-backdrop');
const modalImageElement = document.getElementById('modalImageElement');

aboutImage.addEventListener('click', () => {
  const imageSource = aboutImage.getAttribute('src');
  modalImageElement.setAttribute('src', imageSource);
  imageModal.classList.remove('hidden');
});

imageModal.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.classList.add('hidden');
  }
});


// ===== Modal Video =====
const videoModal = document.getElementById('video-modal-backdrop');
const modalVideoFrame = document.getElementById('modalVideoFrame');
const modalContent = document.getElementById('video-modal-content');
const videoContainers = document.querySelectorAll('.hero-video');

videoContainers.forEach((container) => {
  const overlay = container.querySelector('.video-overlay');
  const iframe = container.querySelector('iframe');
  if (!overlay || !iframe) return;

  overlay.addEventListener('click', (e) => {
    e.stopPropagation();
    const fullSrc = iframe.getAttribute('src');
    const autoplaySrc = fullSrc.includes('?')
      ? `${fullSrc}&autoplay=1`
      : `${fullSrc}?autoplay=1`;

    modalVideoFrame.setAttribute('src', autoplaySrc);
    videoModal.classList.remove('hidden');
  });
});

videoModal.addEventListener('click', (e) => {
  if (!modalContent.contains(e.target)) {
    videoModal.classList.add('hidden');
    modalVideoFrame.setAttribute('src', '');
  }
});


// ===== Navbar + Dark Mode =====
document.addEventListener("DOMContentLoaded", () => {
  tampilkanModalAlert();

  const burgerBtn = document.getElementById("burgerBtn");
  const navlinks = document.getElementById("navlinks");
  const dropdowns = document.querySelectorAll(".dropdown");
  const themeToggle = document.getElementById("themeToggle");

  // Toggle navbar
  burgerBtn.addEventListener("click", () => {
    navlinks.classList.toggle("show");
    if (!navlinks.classList.contains("show")) {
      dropdowns.forEach((d) => d.classList.remove("open"));
    }
  });

  // Dark mode preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  // Toggle dark/light
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
