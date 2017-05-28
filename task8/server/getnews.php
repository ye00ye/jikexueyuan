<?php 
	header("Content-type:application/json;charset=utf-8");

	require_once("db.php");	

	if($conn){
		if($_GET['newstype']){
			$newstype=$_GET['newstype'];
			$sql = "SELECT * FROM news WHERE newstype='$newstype'";
			mysqli_query($conn, "set names 'utf8'");
			$result = mysqli_query($conn, $sql);
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
				}
				echo json_encode($senddata);
			}else{
				$sql = "SELECT * FROM news";
				mysqli_query($conn, "set names 'utf8'");
				$result = mysqli_query($conn, $sql);
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
				}
				echo json_encode($senddata);
			}

		}else{
			echo json_encode(array("link"=>"fail"));
		}
		mysqli_close($conn);
	?>