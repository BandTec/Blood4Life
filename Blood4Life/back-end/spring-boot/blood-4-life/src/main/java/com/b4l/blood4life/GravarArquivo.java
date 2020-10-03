package com.b4l.blood4life;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Formatter;
import java.util.FormatterClosedException;

public class GravarArquivo {

    public static void gravarDoador(ListaObj<Doador> lista, boolean isCSV) {

        FileWriter arq = null;
        Formatter saida = null;
        boolean captaErro = false;
        String nomeArquivo;

        if (isCSV) {
            nomeArquivo = "doadores.csv";
        } else {
            nomeArquivo = "doadores.txt";
        }

        try {
            arq = new FileWriter(nomeArquivo, true);
            saida = new Formatter(arq);
        } catch (IOException erro) {
            System.err.println("Erro ao abrir arquivo");
            System.exit(1);  // encerra o programa, com status de erro
        }


        try {
            for (int i = 0; i < lista.getTamanho(); i++) {
                Doador d = lista.getElemento(i);

                if (isCSV) {
                    saida.format("%-10s;%-10s;%-11s;%-11s;%-3s%n", d.getNome(), d.getDataNascFormatada(), d.getCpf(), d.getTelefone(), d.getTipoSanguineo());
                } else {
                    saida.format("%-10s%-10s%-11s%-11s%-3s%n", d.getNome(), d.getDataNascFormatada(), d.getCpf(), d.getTelefone(), d.getTipoSanguineo());
                }
            }
        } catch (FormatterClosedException erro) {
            System.err.println("Erro ao gravar no arquivo");
            captaErro = true;
        } finally {
            saida.close();
            try {
                arq.close();
            } catch(IOException erro) {
                System.out.println("Erro ao fechar arquivo!");
                captaErro = true;
            }

            if (captaErro) {
                System.exit(1);
            }
        }
    }
}
