<?php
header("Content-type:application/json;hcarset=utf-8");
require_once('db.php');
if($conn){
	//插入新闻
	$newstitle = $_POST["newstitle"];
	$newssrc = $_POST["newssrc"];
	$newstime = $_POST["newstime"];
	$newsimg = $_POST["newsimg"];
	$newstype = $_POST["newstype"];
	$sql = "INSERT INTO news(newstitle, newssrc, newstime, newsimg, newstype)VALUES('$newstitle', '$newssrc', '$newstime', '$newsimg', '$newstype')";
	mysqli_query($conn, "set names 'utf8'");
	$result = mysqli_query($conn, $sql);
	if($result){
		echo json_encode(array("添加"=>"成功"));
	}
	mysqli_close($conn);
}
?>