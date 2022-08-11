import { galleryItems } from "./gallery-items.js";
// Change code below this line
import * as basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

basicLightbox
  .create(
    `
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`
  )
  .show();

console.log(instance);
instance.show();
const imagesList = document.querySelector(".gallery");
const ccc = addEventListener("click", getOriginalUrl);
function getOriginalUrl(event) {
  let originalUrl = "";
  //   console.log(event.target.alt);
  galleryItems.forEach((image) => {
    // console.log(image.description);
    // console.log(event.target.alt);
    if (image.description === event.target.alt) {
      originalUrl = image.original;
    }
  });

  console.log(originalUrl);
  return originalUrl;
}

const ulList = galleryItems
  .map(
    (image) =>
      `<li class = 'imageitem'><img src ='${image.preview}' alt = '${image.description}'></li>`
  )
  .join("");
console.log(imagesList);
imagesList.insertAdjacentHTML("afterbegin", ulList);
