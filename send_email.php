<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Set the recipient email address
    $to = "your_email@example.com"; // Change this to your actual email address

    // Set the email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message";

    // Build the email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $email_subject, $email_content, $email_headers)) {
        // If successful, redirect to thank you page
        header("Location: thank-you.html");
        exit;
    } else {
        // If unsuccessful, redirect to an error page or display an error message
        header("Location: error.html");
        exit;
    }
}
?>
