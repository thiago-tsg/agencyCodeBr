<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados do formulário e proteger contra injeções
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Validar e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "E-mail inválido.";
        exit;
    }

    // Configurações do e-mail
    $to = 't.goncalves1999@gmail.com'; // Substitua pelo seu e-mail
    $subject = 'Formulário de Contato';
    $body = "Nome: $name\nE-mail: $email\nTelefone: $phone\n\nMensagem:\n$message";

    // Escapar e validar os cabeçalhos para evitar injeção
    $from = filter_var($email, FILTER_SANITIZE_EMAIL);
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Falha ao enviar o e-mail.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
