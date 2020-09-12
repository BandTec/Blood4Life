package com.b4l.blood4life;

import java.util.ArrayList;
import java.util.List;

public class Hospital {

    private Integer id;
    private String nome;
    private String localizacao;
    private List<Usuario> usuarioList;

    public Hospital(Integer id, String nome, String localizacao, List<Usuario> usuarioList) {
        this.id = id;
        this.nome = nome;
        this.localizacao = localizacao;
        this.usuarioList = new ArrayList<>();
    }

    public void exibirBanco(){

    }

}
