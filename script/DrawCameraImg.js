'use strict';
let can = document.getElementById('can');
let ctx = can.getContext('2d');



	animate({
	duration: 1400,
	timing(timeFraction) {
		return timeFraction;
	},
	draw(progress) {
		// ctx.shadowColor = 'white';
		// ctx.shadowOffsetX = 4;
		// ctx.shadowOffsetY = 4;
		// ctx.shadowBlur = 5;
		ctx.lineWidth = 2.5;
		ctx.beginPath();
		ctx.strokeStyle = 'white';	
		ctx.clearRect(0,0,can.width,can.height);

		// top-left-corner
		ctx.moveTo(10,10);
		ctx.arcTo(0,10,0,20,10);

		// TOP
		ctx.moveTo(10,10);

		ctx.lineTo(progress*110,10);
		ctx.arcTo(progress*120,10,120,progress*20,10);

		// RIGHT
		ctx.moveTo(120,20);

		ctx.lineTo(120,progress*120);
		ctx.arcTo(120,progress*130,110,130,10);

		// LEFT
		ctx.moveTo(0,20);

		ctx.lineTo(0,progress*120);
		ctx.arcTo(0,progress*130,progress*10,130,10);

		// BOTTOM
		ctx.moveTo(10,130);

		ctx.lineTo(progress*110,130);
	

		// Line in camera
		ctx.moveTo(0,40);

		ctx.lineTo(progress*120,40);

		ctx.stroke();


		// flash
		
		ctx.fillStyle = 'white';
		ctx.fillRect(80,20,progress*20,progress*10);

		

		// Big cicrle
		ctx.beginPath();
		ctx.arc(60,78,33,0,Math.PI*(progress*2));
		ctx.stroke();

		// Small cicrle
		ctx.beginPath();
		ctx.arc(60,78,25,0,Math.PI*(progress*2));
		ctx.stroke();

		// samller circle
		ctx.beginPath();
		ctx.arc(60,78,5,0,Math.PI*(progress*2));
		ctx.stroke();
	}
})
	

// addEventListener('resize',document.body.append(window.innerWidth));//Размер окна






















/*
// прямоугодльник с плавными углами
ctx.beginPath();
ctx.moveTo(250,250);
ctx.lineTo(350,250);
ctx.arcTo(360,250,360,260,10);
ctx.lineTo(360,350);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(360,350);
ctx.lineTo(360,450);
ctx.arcTo(360,460,340,460,10);
ctx.lineTo(250,460);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250,460);
ctx.lineTo(150,460);
ctx.arcTo(140,460,140,450,10);
ctx.lineTo(140,360);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(140,360);
ctx.lineTo(140,260);
ctx.arcTo(140,250,150,250,10);
ctx.lineTo(250,250);
ctx.stroke();

*/

function animate({timing, draw, duration}) {
	// Вычисляем начальное время с нчачала загрузки страницы
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    console.log('timeFraction = '+timeFraction);
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);
    console.log('progress = '+progress);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}















