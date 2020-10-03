package com.b4l.blood4life;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Doador extends Usuario {

    private Integer idDoador;
    private Date dtNascimento;
    private String cpf;
    private String telefone;
    private String tipoSanguineo;


    public Doador(String nome, String email, String senha, Integer idDoador, Date dtNascimento, String cpf, String telefone, String tipoSanguineo) {
        super(nome, email, senha);
        this.idDoador = idDoador;
        this.dtNascimento = dtNascimento;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoSanguineo = tipoSanguineo;
    }

    @Override
    public void cadastrar() {

    }

    @Override
    public void alterarPerfil() {

    }

    public String getDataNascFormatada() {
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
}
