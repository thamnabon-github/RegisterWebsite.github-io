<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    if (!empty($username) && !empty($password)) {
        echo "<div>Work</div>";
    } else {
        echo "<div>Error</div>";
    }
}
