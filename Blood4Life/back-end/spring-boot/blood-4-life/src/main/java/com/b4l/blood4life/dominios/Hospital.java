package com.b4l.blood4life.dominios;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Length(max = 45)
    private String nome;

    @NotNull
    @Length(max = 14)
    private String cnpj;

    @Embedded
    private Endereco endereco;

    @NotNull
    @Length(min = 10, max = 11)
    private String telefone;

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

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    @Override
    public String toString() {
        return String.format(
                "01%-45s%-14s%-30s%-30s%-30s%8s%-30s%-2s%-11s%n",
                getNome(),
                getCnpj(),
                getEndereco().getCidade(),
                getEndereco().getRua(),
                getEndereco().getBairro(),
                getEndereco().getCep(),
                getEndereco().getComplemento(),
                getEndereco().getUf(),
                getTelefone()
        );
    }
}
