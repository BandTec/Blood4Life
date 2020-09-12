package com.b4l.blood4life;

import java.util.Date;

public class AdministradorHospitalar extends Usuario {

    private Integer idAdm;

    public AdministradorHospitalar(Integer id, String nome, Date nascimento, String email, String senha, Integer idAdm) {
        super(id, nome, nascimento, email, senha);
        this.idAdm = idAdm;
    }

    @Override
    public void cadastrar() {

    }

    @Override
    public void alterarPerfil() {

    }

    public Integer getIdAdm() {
        return idAdm;
    }

    public void setIdAdm(Integer idAdm) {
        this.idAdm = idAdm;
    }
}
