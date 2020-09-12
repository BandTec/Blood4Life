package com.b4l.blood4life;

import org.springframework.http.ResponseEntity;

import java.util.Date;

public abstract class Usuario {

    private Integer id;
    private String nome;
    private Date nascimento;
    private String email;
    private String senha;

    public Usuario(Integer id, String nome, Date nascimento, String email, String senha) {
        this.id = id;
        this.nome = nome;
        this.nascimento = nascimento;
        this.email = email;
        this.senha = senha;
    }

    public abstract void cadastrar();

    public abstract void alterarPerfil();

    public void logar(String email, String senha) {

    }

    public void excluirPerfil(String senha) {

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

    public Date getNascimento() {
        return nascimento;
    }

    public void setNascimento(Date nascimento) {
        this.nascimento = nascimento;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
