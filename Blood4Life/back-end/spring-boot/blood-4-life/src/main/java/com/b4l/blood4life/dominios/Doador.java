package com.b4l.blood4life.dominios;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public class Doador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Size(min = 2, max = 45)
    private String nome;

    @Email
    @NotNull
    @Size(min = 10, max = 60)
    private String email;

    @NotNull
    @Size(min = 8, max = 16)
    private String senha;

    @NotNull
    @Size(min = 11, max = 11)
    private String cpf;

    @Past
    @NotNull
    private Date dtNascimento;

    @NotNull
    @Size(min = 10, max = 11)
    private String telefone;

    @Size(min = 2, max = 3)
    private String tipoSanguineo;

    private Character genero;

    // Construtor default necessário para gerar erro na query
    public Doador() {
    }

    public Doador(
            @Email @NotNull @Size(min = 10, max = 60) String email,
            @NotNull @Size(min = 8, max = 16) String senha
    ) {
        this.email = email;
        this.senha = senha;
    }


    public String formatarDataNascFormatada() {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String dataNascFormatada = simpleDateFormat.format(dtNascimento);

        return dataNascFormatada;
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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Date getDtNascimento() {
        return dtNascimento;
    }

    public void setDtNascimento(Date dtNascimento) {
        this.dtNascimento = dtNascimento;
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

    public Character getGenero() {
        return genero;
    }

    public void setGenero(Character genero) {
        this.genero = genero;
    }
}
