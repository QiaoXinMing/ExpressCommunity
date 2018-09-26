<?php
include '../config/connectionManager.php';

$sql = "(select p.picture_id, p.picture_title, p.resource_url, p.picture_content,p.resource_type, per.personal_username from express_picture_info p,express_personal_info per where picture_nav_id ='11' order by picture_forward desc LIMIT 4) union all (select v.video_id, v.video_title, v.video_preview_pic, v.resource_url,v.resource_type, per.personal_username from express_video_info v ,express_personal_info per where video_nav_id ='11' order by video_forward desc LIMIT 3)";
mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);
$PictureVideoList = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){  
        unset($rows[$i]);//删除冗余数据  
    }
    $rows['resource_url'] = $imgUrl.$rows["personal_username"].'/'.explode('|',$rows['resource_url'])[0];
	if($rows['resource_type'] == "video"){
		$rows['picture_content'] = $videoUrl.$rows["personal_username"].'/'.explode('|',$rows['picture_content'])[0];
	}
    array_push($PictureVideoList,$rows);
}

echo json_encode($PictureVideoList);//将数组进行json编码

include '../config/closeConnection.php';
?>