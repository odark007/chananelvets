// Modal functionality
function openModal() {
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Google Maps initialization
function initMap() {
  const otinibi = { lat: 5.6037, lng: -0.1870 };
  const ashaley = { lat: 5.6167, lng: -0.1833 };

  const map1 = new google.maps.Map(document.getElementById('otinibi-map'), {
      zoom: 15,
      center: otinibi,
  });

  const map2 = new google.maps.Map(document.getElementById('ashaley-map'), {
      zoom: 15,
      center: ashaley,
  });

  new google.maps.Marker({ position: otinibi, map: map1 });
  new google.maps.Marker({ position: ashaley, map: map2 });
}

// Toggle Menu for Mobile with "X" Animation
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
      hamburger.addEventListener("click", function () {
          navLinks.classList.toggle("active");
          hamburger.classList.toggle("active");
      });
  } else {
      console.error("Hamburger or nav-links not found in DOM");
  }
});