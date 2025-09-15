const modal = document.querySelector('#imageModal');
const modalImg = document.querySelector('#img01');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

// Open modal when thumbnail clicked
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', function () {
    modal.style.display = "flex";
    currentIndex = index;
    modalImg.src = this.dataset.full;
  });
});

// Show previous image
prevBtn.onclick = function () {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  modalImg.src = thumbnails[currentIndex].dataset.full;
};

// Show next image
nextBtn.onclick = function () {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  modalImg.src = thumbnails[currentIndex].dataset.full;
};

// Close modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Optional: close when clicking outside the image
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
