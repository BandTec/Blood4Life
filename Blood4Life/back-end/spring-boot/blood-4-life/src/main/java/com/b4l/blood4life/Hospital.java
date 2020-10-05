package com.b4l.blood4life;

import java.util.ArrayList;
import java.util.List;

public class Hospital {

    private Integer id;
    private String nome;
    private String localizacao;
    //private List<Usuario> usuarioList;

    public Hospital(Integer id, String nome, String localizacao) {
        this.id = id;
        this.nome = nome;
        this.localizacao = localizacao;
        //this.usuarioList = new ArrayList<>();
    }

    public void exibirBanco(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

}
