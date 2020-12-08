package com.b4l.blood4life.dominios;

import org.hibernate.validator.constraints.Length;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

@Embeddable
public class Endereco {

    @NotNull
    @Length(max = 30)
    private String cidade;

    @NotNull
    @Length(max = 30)
    private String rua;

    @NotNull
    @Length(max = 6)
    private String numero;

    @NotNull
    @Length(max = 30)
    private String bairro;

    @NotNull
    @Length(max = 8)
    private String cep;

    @NotNull
    @Length(max = 30)
    private String complemento;

    @NotNull
    @Length(max = 2)
    private String uf;

    @NotNull
    private Double latitude;

    @NotNull
    private Double longitude;

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
}
