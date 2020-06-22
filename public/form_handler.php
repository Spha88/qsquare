<?php 
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// Clean inputs 
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

  //Set variables to empty string to avoid undefined variable error
  $name = $email = $message = $error = $OK = '';


if( $_SERVER['REQUEST_METHOD'] == 'POST' ){

	
	$name = test_input( $_POST[ 'name' ] );
	$email = test_input( $_POST[ 'email' ] );
	$message = test_input( $_POST[ 'message' ] );

    //Validate the name of the client
    if ( !empty($name) ) {

    	if(strlen($name) > 40 ){
    		$OK = false;
    	 } else {

    		if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
                $OK = false;
              } else {
                $OK = true;
            }

    	}

      } else {

    	$OK = false;
    }

       //Validate the email
    if ($OK == true) {

        if(!empty($email)){

	      	if(strlen($email) > 40 ) {
               $OK = false;
	      	  } else {
               
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
	                    $OK = false;
	                  } else {
                        $OK = true;   
	                }
	      	}

	      } else {
	      	$OK = false;
	    }
    }

       //Validate the message
    if ($OK == true) {
    	
    	if(!empty($message)){
           
            if(strlen($message) > 200){
              
                $OK = false;

              } else {

                 $OK = true;
            }

          } else {
            $OK = false;
        }
    }

    //sending the email
        if ($OK == true) {

        $to = "mr.smehlomakulu@gmail.com";
        $subject = "Online query: ".$name;
        $body = "Name of Client: ".$name."\n\nMessage: \n".$message;
        $headers =  "From: $name <$email>"; 
        
        if ( @mail($to, $subject, $body, $headers) ) {
            //  echo "your email was sent"
            echo json_encode(array(
              "sent" => true
            ));
          } else {
            //  echo 'Email could not be sent';
            echo json_encode(["sent" => false, "message" => "Something went wrong"]);
        }
    }

}

 ?>