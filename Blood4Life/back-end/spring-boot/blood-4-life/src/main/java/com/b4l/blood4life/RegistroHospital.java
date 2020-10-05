package com.b4l.blood4life;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class RegistroHospital {

    private final String systemOperation;
    private final String path;
    private String[] extensions = {".txt", ".csv"};
    private final DateFormat dateFormat;

    public RegistroHospital() {
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
                if (!Files.exists(Paths.get(path + "registroHospital" +  type))) {
                    Files.createFile(Paths.get(path + "registroHospital" +  type));
                    Files.write(Paths.get(path + "registroHospital" +  type),
                            ("id;nome;localizacao;dataHora\n").getBytes(),
                            StandardOpenOption.APPEND);
                }
            }
        } catch (Exception e) {
            System.out.println("Erro apresentado ao criar arquivos.");
        }
    }

    public void escrever(ListaObj<Hospital> lista, boolean isCSV) {
        String type = isCSV ? ".csv" : ".txt";
        try {
            for (int i = 0; i < lista.getTamanho(); i++) {
                Hospital h = lista.getElemento(i);

                String infoLog = String.format(
                        "%s;%s;%s;%s\n",
                        h.getId(),
                        h.getNome(),
                        h.getLocalizacao(),
                        dateFormat.format(new Date())
                );

                Files.write(
                        Paths.get(path + "registroHospital" + type),
                        (infoLog).getBytes(),
                        StandardOpenOption.APPEND
                );
            }
        } catch (Exception e) {
            System.out.println("Erro apresentado ao escrever log.");
        }
    }

}
