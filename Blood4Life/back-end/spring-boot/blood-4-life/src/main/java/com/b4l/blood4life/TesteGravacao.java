package com.b4l.blood4life;

import java.util.Date;

public class TesteGravacao {

    public static void main(String[] args) {

        ListaObj<Doador> lista = new ListaObj(5);

        Doador d1 = new Doador("Pedrin", "pedrin@gmail.com", "senha123", 1, new Date(), "48611558863", "11912345678", "A+");
        Doador d2 = new Doador("Pedrin1", "pedrin1@gmail.com", "senha321", 2, new Date(), "58863486115", "11956781234", "A-");
        Doador d3 = new Doador("Pedrin2", "pedrin2@gmail.com", "123senha", 3, new Date(), "48688631155", "11912678345", "AB+");

        lista.adiciona(d1);
        lista.adiciona(d2);
        lista.adiciona(d3);

        GravarArquivo.gravarDoador(lista, true);
        GravarArquivo.gravarDoador(lista, false);
    }
}
