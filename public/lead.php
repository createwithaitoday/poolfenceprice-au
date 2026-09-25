<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'POST only']);
  exit;
}

$raw = $_POST['payload'] ?? '';
$data = json_decode($raw, true);
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Missing enquiry']);
  exit;
}

function clean(string $value, int $max = 500): string {
  $value = trim(str_replace(["\r", "\n"], ' ', $value));
  return mb_substr($value, 0, $max);
}

$name = clean((string)($data['name'] ?? ''));
$phone = clean((string)($data['phone'] ?? ''));
$email = clean((string)($data['email'] ?? ''));
if ($name === '' || $phone === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Name, phone and email are required']);
  exit;
}

$to = 'fencingsydney@gmail.com';
$lines = [
  'Pool fence enquiry',
  'Name: ' . $name,
  'Phone: ' . $phone,
  'Email: ' . $email,
  'Suburb: ' . clean((string)($data['suburb'] ?? '')),
  'Type: ' . clean((string)($data['enquiryType'] ?? '')),
  'Project: ' . clean((string)($data['projectType'] ?? '')),
  'Fence: ' . clean((string)($data['fenceType'] ?? '')),
  'Length: ' . clean((string)($data['approximateLength'] ?? '')),
  'Gate: ' . clean((string)($data['gateRequirement'] ?? '')),
  'Contact via: ' . clean((string)($data['preferredContact'] ?? '')),
  'Page: ' . clean((string)($data['sourcePage'] ?? '')),
  'When: ' . clean((string)($data['timestamp'] ?? '')),
  'Message: ' . clean((string)($data['message'] ?? ''), 2000),
  'Details: ' . clean(json_encode($data['details'] ?? []), 2000),
  'UTM: ' . clean(json_encode($data['utm'] ?? []), 500),
];

$dir = dirname(__DIR__) . '/leads';
if (!is_dir($dir)) {
  @mkdir($dir, 0750, true);
}
$id = date('Ymd-His') . '-' . bin2hex(random_bytes(3));
$saved = [];
if (!empty($_FILES['photos']) && is_array($_FILES['photos']['name'])) {
  $photoDir = $dir . '/' . $id;
  @mkdir($photoDir, 0750, true);
  $count = count($_FILES['photos']['name']);
  for ($i = 0; $i < $count && $i < 8; $i++) {
    if (($_FILES['photos']['error'][$i] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) continue;
    if (($_FILES['photos']['size'][$i] ?? 0) > 8000000) continue;
    $tmp = $_FILES['photos']['tmp_name'][$i];
    $info = @getimagesize($tmp);
    if ($info === false) continue;
    $ext = image_type_to_extension($info[2], false) ?: 'jpg';
    $dest = $photoDir . '/photo-' . ($i + 1) . '.' . $ext;
    if (move_uploaded_file($tmp, $dest)) $saved[] = basename($dest);
  }
}
$lines[] = 'Photos saved: ' . implode(', ', $saved);
file_put_contents($dir . '/' . $id . '.txt', implode("\n", $lines));

$subject = 'Pool fence enquiry from ' . $name;
$headers = 'From: Fencing Sydney <noreply@poolfenceprice.com.au>' . "\r\n" . 'Reply-To: ' . $email;
$sent = @mail($to, $subject, implode("\n", $lines), $headers);

echo json_encode(['ok' => true, 'emailed' => (bool)$sent]);
