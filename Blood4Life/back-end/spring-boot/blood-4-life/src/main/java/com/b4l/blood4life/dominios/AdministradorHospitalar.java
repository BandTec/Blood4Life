package com.b4l.blood4life.dominios;



public class AdministradorHospitalar  {

    private Integer idAdm;
    private String nome;
    private String email;
    private String senha;

    public AdministradorHospitalar(Integer idAdm, String nome, String email, String senha) {
        this.idAdm = idAdm;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public Integer getIdAdm() {
        return idAdm;
    }

    public void setIdAdm(Integer idAdm) {
        this.idAdm = idAdm;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
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
