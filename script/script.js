let headerContainerText = $('.header-container__text');
let mainContainerImg = $('.main-container__img');

// Удалить класс header-container__text_hidden через 1,8сек
setTimeout(function() {
	headerContainerText.removeClass('header-container__text_hidden');
}, 1800);

setTimeout(function() {
	mainContainerImg.removeClass('main-container__img_hidden');
}, 2200);

// Строки "мои работы"
let leftText = document.querySelector('.main-container__from-left-stroke');
leftText.textContent = '  МОИ РАБОТЫ ';
let rightText = document.querySelector('.main-container__from-right-stroke');
rightText.textContent = ' 	МОИ РАБОТЫ	';
for(let i = 0; i < 2; i++) {
	leftText.textContent += ' МОИ РАБОТЫ ';
	rightText.textContent += '	МОИ РАБОТЫ	';
}



// Двигаем лого при пролистывании страницы вниз
window.addEventListener('scroll', function() {
	if(window.pageYOffset > 0) {
		headerContainerText.css('transform','translateY(200px)');
		headerContainerText.css('color', 'black');
		headerContainerText.css('transition', '0.7s');
		headerContainerText.css('textShadow', '6px 0 6px black');
	} else if(window.pageYOffset < 100) {
		headerContainerText.css('transform', 'none');
		headerContainerText.css('color', 'white');
		headerContainerText.css('transition', '0.5s');
		headerContainerText.css('textShadow', '6px 0 6px white');
	}

	leftText.style.transform = 'translateX('+(-1500+pageYOffset*1.5) + 'px)';
	rightText.style.transform = 'translateX('+(1800-pageYOffset*1.5) + 'px)';
})


// /*-------------------------------------------------------------------*/
