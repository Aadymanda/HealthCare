<!DOCTYPE html>

<head>
    <title>Last Visited Page</title>
</head>
<body>

<?php
// Function to set or update the cookie with the current date-time
function setLastVisitedCookie() {
    $lastVisited = date("Y-m-d H:i:s");
    setcookie("last_visited", $lastVisited, time() + (86400 * 30), "/"); // Cookie expires in 30 days
}

// Check if the last visited cookie is set
if(isset($_COOKIE["last_visited"])) {
    $lastVisitedTime = $_COOKIE["last_visited"];
    echo "<p>Last visited on: $lastVisitedTime</p>";
} else {
    echo "<p>Welcome to the page! It seems to be your first visit.</p>";
}

// Set or update the last visited cookie
setLastVisitedCookie();
?>

</body>
</html>