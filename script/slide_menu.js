let hide = false;
let rot = 'transform:rotate(45deg)';
$('.header-container__menu .poiter').on('click',function() {
	if(!hide){
		$('.header-container__menu').animate({
		right: 0,
		},700);
		// $('.poiter .top').animate({
		// 	width:25,
		// 	top:10,
		// 	left:25,
		// },300);
		// $('.poiter .bottom').animate({
		// 	width:25,
		// 	top:7,
		// 	left:25,
		// },300);
		$('.poiter .top').addClass('top_rotate');
		$('.poiter .bottom').addClass('bottom_rotate');
	} else{
		$('.header-container__menu').animate({
		right: -400,
		},700);
		// $('.poiter .top').animate({
		// 	width:50,
		// 	top:0,
		// 	left:0,
		// 	transform: rot,
		// },300);
		// $('.poiter .bottom').animate({
		// 	width:50,
		// 	top:17,
		// 	left:0,
		// 	transform: rot,
		// },300);
		$('.poiter .top').removeClass('top_rotate');
		$('.poiter .bottom').removeClass('bottom_rotate');
	}
	hide = !hide;
})