<?php



//$_POST = json_decode(file_get_contents('php://input'), true);

//print_r($_POST);
//echo "sivabav";


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webauth";
// Create connection
$conn = mysqli_connect($servername, $username, $password,$dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$imagename=$_FILES["file"]["name"]; 

//Get the content of the image and then add slashes to it 
$imagetmp=addslashes (file_get_contents($_FILES['file']['tmp_name']));

$sql="INSERT INTO image_table VALUES('','$imagename','$imagetmp')";

if (mysqli_query($conn, $sql)) {
	$id = mysqli_insert_id($conn);
    echo "New record created successfully";
    //echo $last_id;
    $sql ="SELECT * FROM image_table WHERE id = $id";
$sth = mysqli_query($conn, $sql);
$result=mysqli_fetch_array($sth);
echo '<img src="data:image/jpeg;base64,'.base64_encode( $result['content']).'"/>';
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>