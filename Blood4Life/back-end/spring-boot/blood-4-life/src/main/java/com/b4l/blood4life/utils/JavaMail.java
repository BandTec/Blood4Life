package com.b4l.blood4life.utils;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class JavaMail {

    public static void main(String[] args) throws Exception {
        JavaMail.sendMail("ranyerysc@gmail.com");
    }

    public static void sendMail(String recipient) throws Exception {
        System.out.println("Preparando a mensagem para envio...");

        /* Credenciais da conta usada para enviar o e-mail */
        String userName = "grupo8.blood4life@gmail.com";
        String password = "#Gfgrupo08";

        /* Parâmetros de conexão com servidor Gmail */
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");

        /* Conexão com o servidor SMTP */
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(userName, password);
            }
        });

        Message message = prepareMessage(session, userName, recipient);

        Transport.send(message);
        System.out.println("Mensagem enviada com sucesso!");
    }

    private static Message prepareMessage(Session session, String userName, String recipient) {
        try {
            Message message = new MimeMessage(session);

            message.setFrom(new InternetAddress(userName));
            message.setRecipients(
                    Message.RecipientType.TO,
                    new InternetAddress[]{new InternetAddress(recipient)}
            );
            message.setSubject("Enviando e-mail com JavaMail");
            message.setText("Enviei este email utilizando JavaMail!");

            return message;
        } catch (Exception ex) {
            System.out.println(ex);
        }

        return null;
    }

}