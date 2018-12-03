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




//var f = null;


// запустить шарики
function doStart (){
	var n = document.getElementById("numF").value;
	f = fac (1, 1, n );
	console.log ("Факториал числа " + n + "!= " + f);
	//rec (0);
}

function fac (f, c, n){
	f = f * c;
	c++;
	if (c <= n){
		f = fac (f, c, n);
	}
	return f;
}
	

function rec (i){
	console.log ("Шаг " + i);
	if (i < 20){
		//i++;
		rec(i+1);
	}
}	
