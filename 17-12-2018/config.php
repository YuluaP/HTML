<?php

$host = "localhost"; /* Host name */
$user = "c17db"; /* User */
$password = "avanti"; /* Password */
$dbname = "c17db"; /* Database name */

$con = mysqli_connect($host, $user, $password, $dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}
