import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import SimpleLightbox from "simplelightbox";
console.log(galleryItems);
console.log(SimpleLightbox);

const imagesList = document.querySelector(".gallery");
// console.log(imagesList);
const ulList = galleryItems
  .map(
    (image) => `<div class="gallery__item">
    
<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
</div>`
  )
  .join("");
imagesList.insertAdjacentHTML("afterbegin", ulList);

// let gallery1 = new SimpleLightbox(".gallery");
// console.log(gallery1);

const imagesListEL = document.querySelector(".gallery");
//Adding listener
imagesListEL.addEventListener("click", getOriginalUrl);
function getOriginalUrl(event) {
  //Checking of targeting to gallery item element
  if (event.target === event.currentTarget) return;
  //Link openning prevention
  event.preventDefault();
  //Assignment of large image url
  //   const originalUrl = event.target.dataset.source;
  // Modal menu creation
  //   const modal = new SimpleLightbox(".gallery a");
  //   console.log(modal);
  //   console.log(imagesListEL);
  //   modal.on("show.simplelightbox", function () {
  //     modal.sourceAttr === event.target.dataset.source;
  //     // modal.close();
  //     // console.log(modal.destroy());
  //     modal.next()`<g width="1400" height="900" src="${event.target.dataset.source}"></g>
  //   `;
  // do something…
  //   });

  const lightbox = new SimpleLightbox(".gallery a", {
    /* options */
  });
}

//   modal.close();
// Modal closure by pushing Escape
//   document.addEventListener("keydown", function (event) {
//     // Escape pushing checking
//     if (event.key === "Escape") {
//       // Modal close call
//       modal.close();
//     }
//   });
// }
