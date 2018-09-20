jQuery(document).ready(function() {
	var currentBackgroundImageNumber = 1,
		maxBackgroundImages = 4,

	timer = setInterval(function() {
		currentBackgroundImageNumber++;
		if( currentBackgroundImageNumber > maxBackgroundImages){
			currentBackgroundImageNumber = 1;
		}
		jQuery('.s-main').css('background-image', 'url(img/fons/' + currentBackgroundImageNumber + '.jpg');
	}, 5000);
});



$(document).ready(function() {
	
	var header = $(".header"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		var firstScrollUp = false; // Параметр начала сколла вверх
		var firstScrollDown = false; // Параметр начала сколла вниз
		
		// Если скроллим
		if ( scrolled > 0 ) {
			// Если текущее значение скролла > предыдущего, т.е. скроллим вниз
			if ( scrolled > scrollPrev ) {
				firstScrollUp = false; // Обнуляем параметр начала скролла вверх
				// Если меню видно
				if ( scrolled < header.height() + header.offset().top ) {
					// Если только начали скроллить вниз
					if ( firstScrollDown === false ) {
						var topPosition = header.offset().top; // Фиксируем текущую позицию меню
						header.css({
							"top": topPosition + "px"
						});
						firstScrollDown = true;
					}
					// Позиционируем меню абсолютно
					header.css({
						"position": "absolute"
					});
				// Если меню НЕ видно
				} else {
					// Позиционируем меню фиксированно вне экрана
					header.css({
						"position": "fixed",
						"top": "-" + header.height() + "px"
					});
				}
				
			// Если текущее значение скролла < предыдущего, т.е. скроллим вверх
			} else {
				firstScrollDown = false; // Обнуляем параметр начала скролла вниз
				// Если меню не видно
				if ( scrolled > header.offset().top ) {
					// Если только начали скроллить вверх
					if ( firstScrollUp === false ) {
						var topPosition = header.offset().top; // Фиксируем текущую позицию меню
						header.css({
							"top": topPosition + "px"
						});
						firstScrollUp = true;
					}
					// Позиционируем меню абсолютно
					header.css({
						"position": "absolute"
					});
				} else {
					// Убираем все стили
					header.removeAttr("style");
				}
			}
			// Присваеваем текущее значение скролла предыдущему
			scrollPrev = scrolled;
		}	
	});			
});


// function mouseHandler(){
// 	button.style.outline = '5px solid';
// }; 
// function mouseHandler2(){

// 	button.style.outline = '0 solid';
// };
// var button = document.getElementById('btnMain');
// button.addEventListener('mouseover', mouseHandler);
// button.addEventListener('mouseout', mouseHandler2);

