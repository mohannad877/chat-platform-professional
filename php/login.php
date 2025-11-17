<?php 
session_start();
include_once "config.php";

$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

if (!empty($email) && !empty($password)) {
    $sql = mysqli_query($conn, "SELECT * FROM users WHERE email = '{$email}'");
    
    if (mysqli_num_rows($sql) > 0) {
        $row = mysqli_fetch_assoc($sql);
        $enc_pass = $row['password'];
        $password_ok = false;

        // First try password_verify for new or upgraded accounts
        if (password_verify($password, $enc_pass)) {
            $password_ok = true;
        } else {
            // Legacy support: account still stored with md5
            $user_pass_md5 = md5($password);
            if ($user_pass_md5 === $enc_pass) {
                $password_ok = true;
                // Upgrade legacy hash to password_hash automatically
                $new_hashed = password_hash($password, PASSWORD_DEFAULT);
                mysqli_query($conn, "UPDATE users SET password = '{$new_hashed}' WHERE unique_id = {$row['unique_id']}");
            }
        }

        if ($password_ok) {
            $status = "Online";
            $sql2 = mysqli_query($conn, "UPDATE users SET status = '{$status}' WHERE unique_id = {$row['unique_id']}");
            if ($sql2) {
                $_SESSION['unique_id'] = $row['unique_id'];
                echo "success";
            } else {
                echo "Something went wrong. Please try again!";
            }
        } else {
            echo "Email or Password is Incorrect!";
        }
    } else {
        echo "$email - This email does not exist!";
    }
} else {
    echo "All input fields are required!";
}