/*
 *
 */
 
function isNumeric(n) {return !isNaN(parseInt(n)) && isFinite(n);}
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
//----------------------------------------------------------------------------------------------

// $ - Обьект jQuery
// ( ) - селектор - куда поместить
// .event - событие какое перехватить
// function() {} - обработчик события - что делать


var slideOpen = 2;
var slideCount = 2;


$( document ).ready(function() {
    console.log( "ready!" );
});



function doAnimateShowHide() {
	console.log ("Start Show Hide");

	$("#slideContent li").eq(slideOpen).hide(2000);
	console.log ("hide");
	slideOpen = Math.floor((Math.random() * 3) - 1);
	if (slideOpen> slideCount) {slideOpen = 0;}
	$("#slideContent li").eq(slideOpen).show(2000);
	console.log ("show");

}


$( "#doAnimateShowHide" ).click(function() {
    doAnimateShowHide();
});


function doAnimateFade() {
	console.log ("Start Fade");

	$("#slideContent li").eq(slideOpen).fadeOut(2000);
	console.log ("fade Out");
	slideOpen = Math.floor((Math.random() * 3) - 1);
	if (slideOpen> slideCount) {slideOpen = 0;}
	$("#slideContent li").eq(slideOpen).fadeIn(2000);
	console.log ("fade In");

}

$( "#doAnimateFade" ).click(function() {
    doAnimateFade();
});

function doAnimateSlide() {
	console.log ("Start Slide");

	$("#slideContent li").eq(slideOpen).slideUp(2000);
	console.log ("Slide Up");
	slideOpen = Math.floor((Math.random() * 3) - 1); //slideOpen++
	if (slideOpen> slideCount) {slideOpen = 0;}
	$("#slideContent li").eq(slideOpen).slideDown(2000);
	console.log ("Slide Down");

}

$( "#doAnimateSlide" ).click(function() {
    doAnimateSlide();
});

function doAnimateRandom() {
	console.log ("Start Random");

	var rand = Math.floor((Math.random() * 3) + 1);
	console.log (rand);
	switch (rand) {
		case 1:
			doAnimateShowHide();
			break;
		case 2:
			doAnimateFade();
			break;
		case 3:
			doAnimateSlide();
			break;

}		


}

$( "#doAnimateRandom" ).click(function() {
    doAnimateRandom();
});

function doAnimate() {
	console.log ("Start Animate");

	/*$("#slideContent li").eq(slideOpen).animate({opacity: "1"});
	console.log ("Animate");*/
	slideOpen = Math.floor((Math.random() * 3) - 1);
	if (slideOpen> slideCount) {slideOpen = 0;}
	$("#slideContent li").eq(slideOpen).animate({opacity: "0.5"});
	console.log ("Animate");

}

$( "#doAnimate" ).click(function() {
    doAnimate();
});
