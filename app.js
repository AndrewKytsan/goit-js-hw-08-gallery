const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];




//пунк 1
const gallery = document.querySelector('.gallery');
const createGalerry = createImages(galleryItems);

function createImages (images){
return images.map(({preview,original,description})=>{
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="#"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('') 
};
gallery.insertAdjacentHTML('beforeend', createGalerry)
//пунк 2

const modalImage = document.querySelector('.lightbox__image');
const modalIsOpen = document.querySelector('.lightbox');
const closeButton = document.querySelector('.lightbox__button');
const closeByOverlayClick = document.querySelector('.lightbox__overlay');
gallery.addEventListener('click',openModal);
// пунк 3 -4 

function openModal (e){
  if(e.target.classList.contains("gallery__image"))
  modalIsOpen.classList.add('is-open')
  modalImage.setAttribute('src', e.target.dataset.source )
  window.addEventListener('keydown',ChangeOnArrow)

}
//пунк 5-6  


closeButton.addEventListener('click',closeModal)

function closeModal() {
  modalIsOpen.classList.remove('is-open')
modalImage.setAttribute('src', " ")
  window.removeEventListener('keydown',ChangeOnArrow)

}
  

//закрытие модалки по нажатию на overlay
closeByOverlayClick.addEventListener('click',closeModal)

//закрытие модалки по клавише Esc
window.addEventListener('keydown',closeModalEsc);

function closeModalEsc(e){
  if (e.code==='Escape'){
   closeModal()
  }
}
//перелистывание галереи
const ChangeOnArrow = function(e){
const key = e.code;
switch(key){
case 'ArrowLeft':
  galleryItems.forEach((el,index,arr)=>{
if(el.original===modalImage.src){
  if(index===0){
    return
  }
  modalImage.src = arr[index-1].original;
 
}

});
break;

case 'ArrowRight':
  for(let i=0; i<galleryItems.length-1; i++){
if(galleryItems[i].original===modalImage.src){
if(i===galleryItems.length-1){
  return
}
modalImage.src = galleryItems[i+1].original;
break;
}
}
}
}



