<?php


class mySqlQuery {
	var $select = "";
	var $from = "";
	var $where = "";
	var  $limit = "";
	var $sqlStr;

	function __construct($sqlBuilder) {
		$this->select = " SELECT " . $sqlBuilder->select1;
		$this->from = " FROM " . $sqlBuilder->from1;
		if (strlen($sqlBuilder->where1) > 1)
			$this->where = " WHERE " . $sqlBuilder->where1;
		$this->limit = " LIMIT " . $sqlBuilder->limit1;
		$this->sqlStr = $this->select . $this->from  . $this->where . $this->limit;
	}

	function echoAll(){
		echo "<p> " . $this->sqlStr . "</p>" ;
	}

}


/**
 * 
 */
class sqlBuilder
{
	public $select1 = "";
	public $from1 = "";
	public $where1 = "";
	public $limit1 = "";

	public function __construct($var){
	}

	public function select ($select){
		$this->select1 = $select;
		return $this;
	}
	public function from ($from){
		$this->from1 = $from;
		return $this;
	}
	public function where ($where){
		$this->where1 = $where;
		return $this;
	}
	public function limit ($limit){
		$this->limit1 = $limit;
		return $this;
	}

	public function get (){
		return new mySqlQuery ($this);
	}


}


$myQuery = (new sqlBuilder (10))
					->select('name, login')
					->from('users')
//					->where('login=1')
					->limit(10)
					->get();

$myQuery->echoAll();					

