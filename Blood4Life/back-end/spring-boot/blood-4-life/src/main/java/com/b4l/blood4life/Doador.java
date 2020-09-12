package com.b4l.blood4life;

import java.util.Date;

public class Doador extends Usuario {

    private String tipoSanguineo;

    public Doador(Integer id, String nome, Date nascimento, String email, String senha, String tipoSanguineo) {
        super(id, nome, nascimento, email, senha);
        this.tipoSanguineo = tipoSanguineo;
    }

    @Override
    public void cadastrar() {

    }

    @Override
    public void alterarPerfil() {

    }

    public String getTipoSanguineo() {
        return tipoSanguineo;
    }

    public void setTipoSanguineo(String tipoSanguineo) {
        this.tipoSanguineo = tipoSanguineo;
    }
}
