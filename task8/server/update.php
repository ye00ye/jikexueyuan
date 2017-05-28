<?php
header("Content-type:application/json;hcarset=utf-8");
require_once('db.php');
if($conn){
	//更新新闻
	$newstitle = $_POST["newstitle"];
	$newssrc = $_POST["newssrc"];
	$newstime = $_POST["newstime"];
	$newsimg = $_POST["newsimg"];
	$newstype = $_POST["newstype"];
	$newsid = $_POST["id"];
	$sql = "UPDATE news SET newstitle='$newstitle', newssrc='$newssrc', newstime='$newstime', newsimg='$newsimg', newstype='$newstype' WHERE id=$newsid";

	mysqli_query($conn, "set names 'utf8'");
	$result = mysqli_query($conn, $sql);

	if($result){
		echo json_encode(array("更新"=>"成功"));
	}else{
		echo json_encode(array("更新"=>"失败"));
	}
	mysqli_close($conn);
}
?>