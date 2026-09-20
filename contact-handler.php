<?php
/**
 * WebDevWorker Contact Form Handler
 * Dispatches inquiries to business@zaviyanllc.com
 */
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    $data = $_POST;
}

$name = trim(strip_tags($data['name'] ?? ''));
$email = trim(filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL));
$subject = trim(strip_tags($data['subject'] ?? 'General Support'));
$message = trim(strip_tags($data['message'] ?? ''));

if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Please provide valid name, email, and message.']);
    exit;
}

$to = 'business@zaviyanllc.com';
$emailSubject = "[WebDevWorker Contact] $subject from $name";
$emailBody = "Name: $name\nEmail: $email\nCategory: $subject\n\nMessage:\n$message\n\nSent from WebDevWorker.com";
$headers = "From: WebDevWorker <noreply@webdevworker.com>\r\nReply-To: $email\r\nX-Mailer: PHP/" . phpversion();

@mail($to, $emailSubject, $emailBody, $headers);

echo json_encode([
    'status' => 'success',
    'message' => 'Thank you! Your message has been received by Zaviyan LLC.'
]);
