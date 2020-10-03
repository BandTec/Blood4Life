package com.b4l.blood4life;

public class AdministradorHospitalar extends Usuario {

    private Integer idAdm;

    public AdministradorHospitalar(String nome, String email, String senha, Integer idAdm) {
        super(nome, email, senha);
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
