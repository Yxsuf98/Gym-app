<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $guestname = $_POST['guestname'];
    $guestemail = $_POST['guestemail'];
    $guesttelephone = $_POST['guesttelephone'];
    $checkin = $_POST['checkin'];
    $checkout = $_POST['checkout'];
    $switch1 = isset($_POST['switch1']) ? $_POST['switch1'] : 'No';
    $switch2 = isset($_POST['switch2']) ? $_POST['switch2'] : 'No';
    $comment = $_POST['comment'];

    // Here, you can process the form data as needed, such as saving it to a database or sending it via email
    // For demonstration purposes, let's just print the data
    echo "<h2>Thank you for your reservation!</h2>";
    echo "<p>Name: $guestname</p>";
    echo "<p>Email: $guestemail</p>";
    echo "<p>Telephone/Mobile: $guesttelephone</p>";
    echo "<p>Check-in Date: $checkin</p>";
    echo "<p>Check-out Date: $checkout</p>";
    echo "<p>Bringing a pet: $switch1</p>";
    echo "<p>Need pickup: $switch2</p>";
    echo "<p>Additional Comments: $comment</p>";
} else {
    // If form is not submitted, redirect to the form page
    header("Location: /");
    exit;
}
?>
