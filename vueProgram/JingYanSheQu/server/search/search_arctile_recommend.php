<?php
include '../config/connectionManager.php';

$sql = "select a.arctile_id,a.arctile_title,a.arctile_content,a.resource_url,p.personal_username from express_arctile_info a , express_personal_info p where a.resource_url != '' order by arctile_looked asc LIMIT 10";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$recommendList = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
	$rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
	$rows["arctile_content"] = mb_substr(strip_tags($rows["arctile_content"]), 0, 50,'utf-8').'...';
    array_push($recommendList,$rows);
}

echo json_encode($recommendList);//将数组进行json编码


include '../config/closeConnection.php';
?>