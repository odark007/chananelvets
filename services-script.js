document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card[data-service]');
  const modal = document.getElementById('service-modal');
  const modalText = document.querySelector('.service-modal-text');

  const serviceTexts = {
    "birds": "We provide specialized care for birds, including health checkups, dietary advice, and beak trimming. Our team ensures your feathered friends stay healthy and happy.",
    "exotic-animals": "Our team is trained to handle exotic animals with care, offering tailored medical services for reptiles, amphibians, and small mammals.",
    "large-animals": "We offer comprehensive care for large animals like horses and livestock, including vaccinations, dental care, and emergency services.",
    "grooming-surgery": "From grooming to surgical procedures, we provide top-notch care to keep your pets looking and feeling their best.",
    "consultation": "Need advice? Our consultations cover everything from nutrition to behavior, ensuring your pet’s well-being.",
    "all-services": "Contact us for all veterinary services."
  };

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const service = this.getAttribute('data-service');
      if (serviceTexts[service]) {
        modalText.textContent = serviceTexts[service];
        modal.style.display = 'flex';
      }
    });
  });
});

function closeServiceModal() {
  const modal = document.getElementById('service-modal');
  modal.style.display = 'none';
}