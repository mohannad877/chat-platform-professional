<?php
// Legacy entry point kept only for backward compatibility during development.
// The app now relies on users.php as the primary users list page.
header("Location: users.php");
exit();