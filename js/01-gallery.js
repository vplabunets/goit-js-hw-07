import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesList = document.querySelector(".gallery");
// console.log(imagesList);
const ulList = galleryItems
  .map(
    (image) => `<div class="gallery__item">
  <a  id = "test" class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join("");

// Adding markup for gallery
imagesList.insertAdjacentHTML("afterbegin", ulList);

//Element search in DOM
const imagesListEL = document.querySelector(".gallery");
//Adding listener
imagesListEL.addEventListener("click", getOriginalUrl);
function getOriginalUrl(event) {
  //Checking of targeting to gallery item element
  if (event.target === event.currentTarget) return;
  //Link openning prevention
  event.preventDefault();
  //Assignment of large image url
  const originalUrl = event.target.dataset.source;
  // Modal menu creation
  const modal = basicLightbox.create(
    `<div class="modal">
  	<img width="1400" height="900" src="${originalUrl}"></div>
  `
  );
  modal.show();
  // Modal closure by pushing Escape
  document.addEventListener("keydown", function (event) {
    // Escape pushing checking
    if (event.key === "Escape") {
      // Modal close call
      modal.close();
    }
  });
}

// const imagesListEL = document.querySelector(".gallery");
// //Adding listener
// imagesListEL.addEventListener("click", getOriginalUrl);
// function getOriginalUrl(event) {
//   console.log(event.target.alt);
//   galleryItems.forEach((image) => {
//     let originalUrl = "";
//     event.preventDefault();
//     if (image.description === event.target.alt) {
//       originalUrl = image.original;
//       basicLightbox
//         .create(
//           `<div class="modal">
//   	<img width="1400" height="900" src="${originalUrl}"></div>
//   `
//         )
//         .show();
//       return;
//     }
//     return;
//   });
// }
