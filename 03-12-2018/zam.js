/*
 *
 */
 
 function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

var ballsInterval;
var ballsDirectLeft = [];
var ballsDirectTop = [];

var bw=window.innerWidth - 100; //ширина экрана
var bh= window.innerHeight - 250;//высота экрана

console.log ("Ширина экрана " + bw + " | " + bh);

// перемещение шарика
function moveBall (){
	var flgSet = true;
	var balls = document.getElementsByTagName("strong");
	for (var i = 0; i < balls.length; i++) { 
		x = parseInt(balls[i].style.marginLeft);
		y = parseInt(balls[i].style.marginTop);

		//console.log ("Текущая позиция шарика " + i + "Left " + x + "Top " + y );

		if (!isNumeric(x)){x = 20; console.log (" поменял х на стандартный");}
		if (!isNumeric(y)){y = 20; console.log (" поменял y на стандартный");}

		x =  x + ballsDirectLeft[i];
		t1 = x + "px";
		y = y + ballsDirectTop[i];		
		t2 = y + "px";
		//console.log ("Двигаю шарик " + i + "Left " + t1 + "Top " + t2 );

		balls[i].style.marginLeft = t1;
		balls[i].style.marginTop = t2;

//console.log ("Ширина экрана " + bw + " | " + bh);

//setTimeout
	if ( x > 300 || x < 3 || y > 300 || y < 3 ) { flgSet = false;}
	console.log ("x = " + x + "y = " + y + " " + flgSet);
	}

	if (flgSet){
		setTimeout (moveBall, 50);
	}
}

// запустить шарики
function doStart (){
	var b = document.getElementById("numBalls").value;
	var content = document.getElementById("content");
	content.innerHTML = " ";
	for (i = 0; i < b; i ++){
		console.log ("Создаю " + i + " шарик");
		tmp = document.createElement ("strong");
		tmp.className = "ball";
		// Дописать случайный бек
		// Дописать случайное смещение
		tmp.style.marginTop = randomInteger (30, 100) + "px";
		tmp.style.marginLeft = randomInteger (30, 100) + "px";
		tmp.style.backgroundColor = "#" + randomInteger (1000, 2000);
		ballsDirectLeft[i] = randomInteger (1, 5);
		ballsDirectTop[i] = randomInteger (1, 5);
		
		tmp.innerHTML = i;

		content.appendChild (tmp);		
		delete tmp;
		
		
		
	}
	
	
	/*
	ballsDirectLeft[0] = 5;
	ballsDirectTop[0] = 5;
	*/
	ballsInterval = setTimeout (moveBall, 10);
}

// остановить шарики
function doStop (){
	clearInterval (ballsInterval);
}



