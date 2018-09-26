<?php

include '../config/connectionManager.php';
$info = $_POST['postInfo'];
$type = $info["type"];
$username = $info["name"];
$password = $info["password"];
$regTime = $info["regTime"];


if($type == "username"){
  $sql = "insert into express_personal_info (personal_username,personal_password,personal_register_time,personal_meber_id) value ('$username','$password','$regTime','2'); ";
}
if($type == "email"){
   $sql = "insert into express_personal_info (personal_email_name,personal_password,personal_register_time,personal_meber_id) value ('$username','$password','$regTime','2'); ";
}
if($type == "phone"){
   $sql = "insert into express_personal_info (personal_phoneNum,personal_password,personal_register_time,personal_meber_id) value ('$username','$password','$regTime','2'); ";
}

mysqli_query($link , "set names utf8");
$result = mysqli_query($link, $sql);

if(!$result){
  die("插入数据失败：");
}else{
  $img = "../../images/".$username;
  $video = "../../videos/".$username;
    if (is_dir($path)){   
        return ;
    }else{ 
         mkdir(iconv("UTF-8", "gbk", $img),0777,true);
		 mkdir(iconv("UTF-8", "gbk", $video),0777,true);
		/*  
        if ($res){ 
            echo "$path success"; 
        }else{ 
            echo "$path faild"; 
        } 
		*/
    }
}
echo "注册成功";

include '../config/closeConnection.php';
?>