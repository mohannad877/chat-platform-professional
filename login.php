<?php
session_start();
if (isset($_SESSION['unique_id'])) {
    header("location: users.php");
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <?php include_once "php/header.php"; ?>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="wrapper">
        <section class="form login">
            <header>Log in to Godzilla Messages</header>
            <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
                <div class="error-text"></div>

                <div class="field input">
                    <label for="email">Email address</label>
                    <input type="text" name="email" id="email" placeholder="Enter your email" required>
                </div>

                <div class="field input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" required>
                    <i class="fas fa-eye toggle-password" id="togglePassword"></i>
                </div>
                <div class="field button">
                    <input type="submit" name="submit" value="Continue to chat">
                </div>
                <div class="link">Don't have an account? <a href="sginup.php">Create one</a></div>
            </form>
        </section>
    </div>
    <script src="js/pass-show-hide.js"></script>
    <script src="js/login.js"></script>
</body>

</html>