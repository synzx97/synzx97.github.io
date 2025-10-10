
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById("overlay")

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
  });

const texts = [
  "Full Stack Developer",
  "Website Developer",
  "Web Designer",
  "Ethical Hacker",
  "Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = texts[count];
  
  if (isDeleting) {
    index--;
  } else {
    index++;
  }

  document.getElementById("typing").textContent = currentText.slice(0, index);

  let speed = isDeleting ? 50 : 120; // kecepatan hapus & ketik

  if (!isDeleting && index === currentText.length) {
    speed = 1500; // jeda saat selesai ngetik
    isDeleting = true;
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    speed = 500; // jeda sebelum mulai teks berikutnya
  }

  setTimeout(typeEffect, speed);
}
document.addEventListener("DOMContentLoaded", typeEffect);

  const popup = document.getElementById("spotifyPopup");
  const openBtn = document.getElementById("showSpotify");
  const closeBtn = document.getElementById("closePopup");

  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Tutup popup saat klik luar konten
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });



  function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    const triggerBottom = window.innerHeight * 0.85; // 85% tinggi layar

    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('show'); // ambahkan class show saat kelihatan
      } else {
        el.classList.remove('show'); // (opsional) hilangkan kalau keluar layar
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll); // jalanin pas pertama kali juga

   const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Hapus class active dari semua tab & konten
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Tambahkan class active ke tab dan konten yang dipilih
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    email: e.target.email.value,
    message: e.target.message.value
  };

  const response = await fetch("https://formspree.io/f/mzzjgewe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const status = document.getElementById("status");
  if (response.ok) {
    status.textContent = "Pesan berhasil dikirim!";
    e.target.reset();
  } else {
    status.textContent = "Gagal mengirim pesan. Coba lagi.";
  }
});
