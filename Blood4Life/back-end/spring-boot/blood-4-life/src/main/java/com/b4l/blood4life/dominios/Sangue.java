package com.b4l.blood4life.dominios;

public class Sangue {

    private String tipoSangue;
    private Double quantidadeAtual;

    public Sangue(String tipoSangue, Double quantidadeAtual) {
        this.tipoSangue = tipoSangue;
        this.quantidadeAtual = quantidadeAtual;
    }

    public String getTipoSangue() {
        return tipoSangue;
    }

    public void setTipoSangue(String tipoSangue) {
        this.tipoSangue = tipoSangue;
    }

    public Double getQuantidadeAtual() {
        return quantidadeAtual;
    }

    public void setQuantidadeAtual(Double quantidadeAtual) {
        this.quantidadeAtual = quantidadeAtual;
    }
}
