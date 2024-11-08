let images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
];

function init() {
  renderImages();
}

function renderImages() {
  let imageBox = document.getElementById("imgbox");
  imageBox.innerHTML = "";

  for (let i = 1; i < images.length; i++) {
    imageBox.innerHTML += `
        <div class="image">
          <img src="img/${i}.jpg" alt="Bild ${i}" onclick="showBigImage(${i})">
        </div> 
      `;
  }
}

function showBigImage(i) {
  let bigImageBox = document.getElementById("bigimagecontainer");
  bigImageBox.innerHTML = renderHtmlBigImage(i);
  bigImageBox.classList.remove("dp-none");
}

function nextImage(i) {
  i = (i + 1) % images.length;
  if (i === 0) i = 1;
  showBigImage(i);
}

function previousImage(i) {
  i = (i - 1 + images.length) % images.length;
  if (i === 0) i = images.length - 1;
  showBigImage(i);
}

function closeBigImage() {
  document.getElementById("bigimagecontainer").classList.add("dp-none");
}
