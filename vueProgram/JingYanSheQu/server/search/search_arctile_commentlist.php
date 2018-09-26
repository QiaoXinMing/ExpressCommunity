<?php
include '../config/connectionManager.php';
$id=$_POST['postInfo'];
$sql = "select ar.*,p.personal_username,p.personal_pic from express_arctile_reply_info ar, express_arctile_info a, express_personal_info p where ar.arctile_id = '$id' and ar.personal_id = p.personal_id and a.arctile_id = ar.arctile_id";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$arctileList = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
	$rows["personal_pic"] =  $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['personal_pic'])[0];
    array_push($arctileList,$rows);
}

echo json_encode($arctileList);//将数组进行json编码


include '../config/closeConnection.php';
?>