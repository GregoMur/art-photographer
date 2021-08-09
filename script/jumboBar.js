"use strict";

let images = ['img/small/1.jpg', 'img/small/2.jpg', 'img/small/3.jpg', 'img/small/4.jpg', 'img/small/5.jpg', 
	'img/small/6.jpg', 'img/small/7.jpg'];//Массив изображений
// let photos = document.querySelector('.photos');

let mainContainerPhotoGallery = document.querySelector('.main-container__photo-gallery');//Тут выводим фото

let mainContainerPhotoGalleryImg = document.querySelector('.main-container__photo-gallery > img');
mainContainerPhotoGalleryImg.style.opacity = 1;

let current = 0;//текущий элемент массива

mainContainerPhotoGalleryImg.src = images[current];

// Кнопки далее и назад
let nextImg = document.querySelector('.main-container__next-img');
let prevImg = document.querySelector('.main-container__previus-img');

nextImg.addEventListener('click', toNextImage);

function toNextImage() {
	++current;
	if(current > images.length-1) {
		current = 0;
	}

	animate({
		duration: 1500,
		timing(timeFraction) {
    		return timeFraction;
  		},
  		draw(progress) {
  			mainContainerPhotoGalleryImg.style.opacity = 1 - progress;
  		}
  	})

	mainContainerPhotoGalleryImg.src = images[current];

	animate({
		duration: 1500,
		timing(timeFraction) {
    		return timeFraction;
  		},
  		draw(progress) {
  			mainContainerPhotoGalleryImg.style.opacity = 0 + progress;
  		}
  	})
 } 

 prevImg.addEventListener('click', toPreviousImage);

 function toPreviousImage() {
 	--current;
 	if(current < 0) {
 		current = images.length-1;
	}

 	animate({
		duration: 1500,
		timing(timeFraction) {
    		return timeFraction;
  		},
  		draw(progress) {
  			mainContainerPhotoGalleryImg.style.opacity = 1 - progress;
  		}
  	})

	mainContainerPhotoGalleryImg.src = images[current];

	animate({
		duration: 1500,
		timing(timeFraction) {
    		return timeFraction;
  		},
  		draw(progress) {
  			mainContainerPhotoGalleryImg.style.opacity = 0 + progress;
  		}
  	})
 }


 function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

