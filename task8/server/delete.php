<?php
	header("Content-type:application/json;charset:utf-8");
	require_once("db.php");
	if($conn){
		$newsid = $_POST['newsid'];
		mysqli_query($conn, "set names 'utf8'");
		$sql = "DELETE FROM news WHERE id = $newsid";
		mysqli_query($conn,$sql);

		echo json_encode(array("删除状态"=>"成功"));
	}
	mysqli_close($conn);

?>