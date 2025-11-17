<?php
session_start();
if(isset($_SESSION['unique_id'])) {
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
        <section class="form signup">
            <header>Create your Godzilla Messages account</header>
            <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
                <div class="error-text"></div>

                <div class="field input">
                    <label for="fname">First name</label>
                    <input type="text" name="fname" placeholder="First name" required>
                </div>
                <div class="field input">
                    <label for="lname">Last name</label>
                    <input type="text" name="lname" placeholder="Last name" required>
                </div>
                <div class="field input">
                    <label for="email">Email address</label>
                    <input type="email" name="email" placeholder="Email address" required>
                </div>
                <div class="field input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" required>
                    <i class="fas fa-eye toggle-password" id="togglePassword"></i>
                </div>
                <div class="field image">
                    <label for="image">Profile image</label>
                    <input type="file" name="image" accept="image/*" required>
                </div>
                <div class="field button">
                    <input type="submit" name="submit" value="Create account & continue">
                </div>
                <div class="link">Already have an account? <a href="login.php">Log in</a></div>
            </form>
        </section>
    </div>

    <script src="js/pass-show-hide.js"></script>
    <script src="js/signup.js"></script>
</body>

</html>
