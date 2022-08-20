import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const galleryImages = createGallleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryImages);

function createGallleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
                </a>
                </div>`;
    })
    .join(``);
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});

console.log(galleryItems);
