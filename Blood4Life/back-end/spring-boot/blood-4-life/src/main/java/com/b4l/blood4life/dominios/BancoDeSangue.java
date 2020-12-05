package com.b4l.blood4life.dominios;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class BancoDeSangue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Size(min = 2, max = 3)
    private String tipoSangue;

    @NotNull
    private Double qtdAtual;

    @JsonBackReference
    @JoinColumn(name = "bancodesangueId")
    @ManyToOne

    private Hospital hospital;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTipoSangue() {
        return tipoSangue;
    }

    public void setTipoSangue(String tipoSangue) {
        this.tipoSangue = tipoSangue;
    }

    public Double getQtdAtual() {
        return qtdAtual;
    }

    public void setQtdAtual(Double qtdAtual) {
        this.qtdAtual = qtdAtual;
    }

    public Hospital getHospital() {
        return hospital;
    }

    public void setHospital(Hospital hospital) {
        this.hospital = hospital;
    }
}
