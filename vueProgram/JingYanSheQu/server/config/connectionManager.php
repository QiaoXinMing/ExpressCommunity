<?php
/*
*    connection   database  
*/
$url = 'localhost';
$user = 'root';
$password = '';
$dataBase = 's3613622';
$imgUrl = 'http://192.168.1.101:65534/JingYanSheQu/images/';
$videoUrl='http://192.168.1.101:65534/JingYanSheQu/videos/';

$link = mysqli_connect(
    $url,  /* The host to connect to 连接MySQL地址 */
    $user,      /* The user to connect as 连接MySQL用户名 */
    $password,  /* The password to use 连接MySQL密码 */
    $dataBase,
	3306);    /* The default database to query 连接数据库名称*/

if (!$link) {
    echo "Can't connect to MySQL Server. Errorcode:".mysqli_connect_error();
}
/*
*     跨域
*/
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentials",true);
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT,DELETE");
header("Content-type: text/html; charset=utf-8");

?>