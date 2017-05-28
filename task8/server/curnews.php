<?php
	header("Content-type:application/json;charset:utf-8");
	require_once("db.php");
	if($conn){
		$newsid = $_GET['newsid'];
		mysqli_query($conn, "set names 'utf8'");
		$sql = "SELECT * FROM news WHERE id = $newsid";
		$result = mysqli_query($conn,$sql);
		$senddata = array();
		while($row = mysqli_fetch_assoc($result)){
			array_push($senddata, array(
					'id'=>$row['id'],
					'newstype'=>$row['newstype'],
					'newsimg'=>$row['newsimg'],
					'newstime'=>$row['newstime'],
					'newstitle'=>$row['newstitle'],
					'newssrc'=>$row['newssrc']
				));
		};		
		echo json_encode($senddata);
	}
	mysqli_close($conn);

?>