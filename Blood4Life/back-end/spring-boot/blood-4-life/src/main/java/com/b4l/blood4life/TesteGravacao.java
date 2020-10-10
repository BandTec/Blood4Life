package com.b4l.blood4life;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.dominios.Hospital;

import java.util.Date;

public class TesteGravacao {

    public static void main(String[] args) {

        ListaObj<Doador> lista = new ListaObj(5);

        Doador d1 =  new Doador(1,
                "pedrin",
                "pedrin@gmail.com",
                "123senha",
                new Date(),
                "48611558863",
                "11912345678",
                "A+",
                "LGTV");

        Doador d2 =  new Doador(1,
                "pedrin2",
                "pedrin2@gmail.com",
                "1233senha",
                new Date(),
                "48611558263",
                "11212345678",
                "B+",
                "LGTVV");

        Doador d3 =  new Doador(1,
                "pedrin3",
                "pedrin3@gmail.com",
                "12345senha",
                new Date(),
                "48612158863",
                "11112345678",
                "C+",
                "LGTVQ");


//       Doador d1 = new Doador("Pedrin", "pedrin@gmail.com", "senha123", 1, new Date(), "48611558863", "11912345678", "A+","LGTV");
//        Doador d2 = new Doador("Braian", "pedrin1@gmail.com", "senha321", 2, new Date(), "58863486115", "11956781234", "A-", "LGTV");
//        Doador d3 = new Doador("Pedrin2", "pedrin2@gmail.com", "123senha", 3, new Date(), "48688631155", "11912678345", "AB+", "LGTV");

        lista.adiciona(d1);
        lista.adiciona(d2);
        lista.adiciona(d3);

        RegistroDoador registroDoador2 = new RegistroDoador();

        registroDoador2.escreverUsuario(lista, true);

        ListaObj<Hospital> hospitais = new ListaObj(3);

        Hospital h1 = new Hospital(0,"Albert", "Localização 01");
        Hospital h2 = new Hospital(1,"Albert 2", "Localização 02");
        Hospital h3 = new Hospital(2,"Albert 3", "Localização 03");

        hospitais.adiciona(h1);
        hospitais.adiciona(h2);
        hospitais.adiciona(h3);

        RegistroHospital registroHospital = new RegistroHospital();

        registroHospital.escrever(hospitais, true);



    }
}
