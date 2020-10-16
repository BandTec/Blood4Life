package com.b4l.blood4life.dominios;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public class Doador{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idDoador;

    @NotNull
    @Size(min = 2, max = 45)
    private String nome;

    @NotNull
    @Email
    @Size(min = 10, max = 60)
    private String email;

    @NotNull
    @Size(min = 8, max = 16)
    private String senha;

    @Past
    @NotNull
    private Date dtNascimento;

    @NotNull
    @Size(min = 11, max = 11)
    private String cpf;

    @NotNull
    @Size(min = 11, max = 11)
    private String telefone;

    @Size(min = 2, max = 3)
    private String tipoSanguineo;

    @NotNull
    @Size(min = 1, max = 1)
    private String genero;

    public Doador() {
    }

    public Doador(String tipoSanguineo) {
        this.tipoSanguineo = tipoSanguineo;
    }

    public Doador(Integer idDoador, String nome, String email, String senha, Date dtNascimento, String cpf, String telefone, String tipoSanguineo, String genero) {
        this.idDoador = idDoador;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dtNascimento = dtNascimento;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoSanguineo = tipoSanguineo;
        this.genero = genero;
    }

    public String formatarDataNascFormatada() {
        SimpleDateFormat formatador = new SimpleDateFormat("yyyy-MM-dd");

        String dataNascFormatada = formatador.format(dtNascimento);

        return dataNascFormatada;
    }

    public Integer getIdDoador() {
        return idDoador;
    }

    public void setIdDoador(Integer idDoador) {
        this.idDoador = idDoador;
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

    public Date getDtNascimento() {
        return dtNascimento;
    }

    public void setDtNascimento(Date dtNascimento) {
        this.dtNascimento = dtNascimento;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getTipoSanguineo() {
        return tipoSanguineo;
    }

    public void setTipoSanguineo(String tipoSanguineo) {
        this.tipoSanguineo = tipoSanguineo;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }
}
