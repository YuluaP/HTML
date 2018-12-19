<?php

/**
 * 
 */


interface doPrepod {
	function doPara ();
} ;

abstract  class Prepod implements doPrepod {
}

class PrepodProg extends Prepod{
	public function doPara($value=''){
		echo "<p> Program </p>";
	}
}

class PrepodDis extends Prepod{
	public function doPara($value=''){
		echo "<p> Design </p>";
	}
}

class PrepodMal extends Prepod{
	public function doPara($value=''){
		echo "<p> Mal </p>";
	}
}


/** --------------------------------------------------------
 * 
 */
class Zavuch{
	var $day;
	var $cP, $cD, $cM; //количество преподавателей
	var $mP, $mD, $mM; //максимальное количество преподавателей

	var $Prepod;
	var $countPrepod;

	function __construct($day){
		$this->day = $day;
		if ($day < 5) {
			$this->cP = 7; $this->cD = 3; $this->cM = 3;
		} else {
			$this->cP = 3; $this->cD = 3; $this->cM = 7;
		}
		$this->mP = 8; $this->mD = 8; $this->mM = 6;
		$this->countPrepod = 0;
	}

	function getPP (){
		if ($this->cP > 0 && $this->mP > 0){
			$this->cP--; $this->mP--;
			$this->Prepod [$this->countPrepod] =  new PrepodProg ();
			$this->countPrepod++;
		} else {
			$this->getPD ();
		}
	}

	function getPD (){
		if ($this->cD > 0 && $this->mD > 0){
			$this->cD--; $this->mD--;
			$this->Prepod [$this->countPrepod] =  new PrepodDis ();
			$this->countPrepod++;
		} else {
			$this->getPM ();
		}
	}

	function getPM (){
		if ($this->cM > 0 && $this->mM > 0){
			$this->cM--; $this->mM--;
			$this->Prepod [$this->countPrepod] =  new PrepodMal ();
			$this->countPrepod++;
		} else {
			die ("Кончились преподаватели" . $this->day );
		}
	}

	function createDay ($count){
		for ($i=0; $i<$count; $i++){
			$this->getPP();
		}
	}

	function echoAll (){
//		echo "<div>" . 
		echo "<ol>";
		for ($i=0; $i<$this->countPrepod; $i++){
			echo "<li>";
			$this->Prepod[$i]->doPara();
			echo "</li>";
		}
		echo "</ol>";
	}


}



/**
 * 
 */

echo "<table><tr>";
echo "<td>";
$mon = new Zavuch(1);
$mon->createDay (10);
$mon->echoAll();
echo "</td><td>";
$thu = new Zavuch(2);
$thu->createDay (12);
$thu->echoAll();
echo "</td><td>";
$sat = new Zavuch(6);
$sat->createDay (12);
$sat->echoAll();
echo "</td>";
echo "</tr></table>";
