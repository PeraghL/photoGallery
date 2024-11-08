function renderHtmlBigImage(i) {
    return `
      <div class="ico-close">
        <img onclick="closeBigImage()" src="img/icons/x-solid.svg" alt="Schließen">
      </div>
      <div class="bigimg-box" id="bigimgbox">
        <img class="icon" src="img/icons/arrow-left-solid.svg" alt="Pfeil Links" onclick="previousImage(${i})" />
        <img class="main-img" src="img/${i}.jpg" alt="Bild ${i}" id="bigImage" />
        <img class="icon" src="img/icons/arrow-right-solid.svg" alt="Pfeil Rechts" onclick="nextImage(${i})" />
      </div>
      <div class="xtra-icons">
        <img src="img/icons/arrow-left-solid.svg" alt="Pfeil Links" onclick="previousImage(${i})" />
        <img src="img/icons/arrow-right-solid.svg" alt="Pfeil Rechts" onclick="nextImage(${i})" />
      </div>
    `;
}