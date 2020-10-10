package com.b4l.blood4life;


import com.b4l.blood4life.dominios.Doador;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.text.DateFormat;
import java.text.SimpleDateFormat;


public class RegistroDoador {

    private final String systemOperation;
    private final String path;
    private String[] extensions = {".txt", ".csv"};
    private final DateFormat dateFormat;

    public RegistroDoador() {
        this.systemOperation = System.getProperty("os.name").toLowerCase();
        this.path = systemOperation.contains("win") ? "C:/Blood4Life/" : "/var/log/";
        dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        criarDiretorio();
        criarArquivo();
    }

    public void criarDiretorio() {
        try {
            if (!Files.exists(Paths.get(path))) {
                Files.createDirectory(Paths.get(path));
            }
        } catch (Exception e) {
            System.out.println("Erro apresentado ao criar diretório.");
        }
    }

    public void criarArquivo() {
        try {
            for (String type : extensions) {
                if (!Files.exists(Paths.get(path + "registroDoador" + type))) {
                    Files.createFile(Paths.get(path + "registroDoador" + type));
                    Files.write(Paths.get(path + "registroDoador" + type),
                            ("nome;dtNascimento;cpf;telefone;tipoSanguineo\n").getBytes(), StandardOpenOption.APPEND);
                }
            }
        } catch (Exception e) {
            System.out.println("Erro apresentado ao criar arquivos.");
        }
    }


    public void escreverUsuario(ListaObj<Doador> lista, boolean isCSV) {
        String type = isCSV ? ".csv" : ".txt";
        try {

            for (int i = 0; i < lista.getTamanho(); i++) {
                Doador d = lista.getElemento(i);

                String infoLog = String.format(
                        "%-10s;%-10s;%-11s;%-11s;%-3s\n",
                        d.getNome(),
                        d.formatarDataNascFormatada(),
                        d.getCpf(),
                        d.getTelefone(),
                        d.getTipoSanguineo()
                );

                Files.write(
                        Paths.get(path + "registroDoador" + type),
                        (infoLog).getBytes(),
                        StandardOpenOption.APPEND
                );

            }

        } catch (Exception e) {
            System.out.println("Erro apresentado ao escrever log.");
        }
    }



}

