<?php 

// Clean inputs 
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

  //Set variables to empty string to avoid undefined variable error
  $name = $email = $message = $error = $OK = '';

  $error_style = "style='font-weight:bold; color: #cc0000;'";

function error_message($string) {
	return '<span style="font-weight: bold; color: #cc0000;" >'.$string.'</span>';
}


if( $_SERVER['REQUEST_METHOD'] == 'GET' ){

	
	$name = test_input( $_GET[ 'name' ] );
	$email = test_input( $_GET[ 'email' ] );
	$message = test_input( $_GET[ 'message' ] );

    //Validate the name of the client
    if ( !empty($name) ) {

    	if(strlen($name) > 40 ){
    		$OK = false;
    		$error = error_message( 'The name you entered is too long.');
    	 } else {

    		if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
                $error = error_message('Only letters and white spaces allowed');
                $OK = false;
              } else {
                $OK = true;
            }

    	}

      } else {

    	$OK = false;
    	$error = error_message('Please enter your name');
    }

       //Validate the email
    if ($OK == true) {

        if(!empty($email)){

	      	if(strlen($email) > 40 ) {

               $error = error_message('Your email address is too long');
               $OK = false;

	      	  } else {
               
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

                        $error = error_message( 'Your email address format is invalid '.$name.'.');  
	                    $OK = false;

	                  } else {
                
                        $OK = true;   
	                }
	      	}

	      } else {

	      	$OK = false;
	      	$error = error_message( 'Please enter your email address' );
	    }
    }

       //Validate the message
    if ($OK == true) {
    	
    	if(!empty($message)){
           
            if(strlen($message) > 200){
                
                $error = error_message( 'Your message is too long: Max 200 Characters.' );
                $OK = false;

              } else {

                 $OK = true;
            }

          } else {

            $error = error_message( 'You forgot to type your message.' );
            $OK = false;
        }
    }

    //sending the email
        if ($OK == true) {

        $to = "mr.smehlomakulu@gmail.com";
        $subject = "Online enquirey ";
        $body = "Name of Client: ".$name."\n\nMessage: \n".$message;
        $headers =  "From: $name <$email>"; 
        
        if (@mail($to, $subject, $body, $headers) ) {
	           $error = '<span style="font-size: 1.1em; font-weight: bold; color: #557a95;" >Your email has been sent '.$name.', I will get back to you as soon as possible</br> Thank you.<i class="fa fa-smile-o fa-lg"></i></span>';
               // the following line will just clean the form
	             //$name = $email = $message = '';

             $error = "your email was sent";
             echo $error;

          } else {
            
	           $error = error_message( "Sorry an error occured $name, Please try again later" );
             echo $error;
        }
    }

}






 ?>