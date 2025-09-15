const modal = document.querySelector('#imageModal');

const img = document.querySelector('#thumbnail');
const modalImg = document.querySelector('#img01');
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

const span = document.querySelector('.close')[0];

span.onclick = function() {
    modal.style.display = "none";
}