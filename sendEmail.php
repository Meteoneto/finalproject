<?php 
if(isset($_POST['name']) && isset($_POST['email'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $body = $_POST['body'];


        include('./phpmailer/class.smtp.php');
        include "./phpmailer/class.phpmailer.php"; 
        


        $nFrom = "CV Reply";    
        $mFrom = 'nguyenvancuong215@gmail.com'; 
        $mPass = 'Menu00d1';       
        $nTo = 'Truong Minh'; 
        $mTo = 'minh.ntrg5@gmail.com';   
        $mail             = new PHPMailer();
        $body             = '<strong>Họ và tên:  </strong>'.$name.'<br>'.'<strong>Email:  </strong>'.$email.'<br>'.'<strong>Lời nhắn: </strong>'.$body;   // Noi dung email
        $title = 'CV Reply | ';  
        $mail->IsSMTP();             
        $mail->CharSet  = "utf-8";
        $mail->SMTPDebug  = 0;  
        $mail->SMTPAuth   = true; 
        $mail->SMTPSecure = "ssl"; 
        $mail->Host       = "smtp.gmail.com";
        $mail->Port       = 465; 

        $mail->Username   = $mFrom;  
        $mail->Password   = $mPass;    
        $mail->SetFrom($mFrom, $nFrom);
        $mail->AddReplyTo($email, $name); 
        $mail->Subject    = $title;
        $mail->MsgHTML($body);
        $mail->AddAddress($mTo, $nTo);

if ($mail->send()) {
    $status = "success";
    $response = "A reply should be expected soon";
} else {
    $status = "error";
    $response = "Something wrong" . $mail->ErrorInfo;
}

exit(json_encode(array("status" => $status, "response" => $response)));

}
?>
                           