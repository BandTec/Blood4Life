package com.b4l.blood4life.dominios;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "hospital")
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_hospital")
    private Integer id;

    @NotNull
    @Length(max = 45)
    private String nome;

    @NotNull
    @Length(max = 14)
    private String cnpj;

    @NotNull
    @Length(min = 10, max = 11)
    private String telefone;

    @Embedded
    private Endereco endereco;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "doadores_hospital",
            joinColumns = {@JoinColumn(name = "id_hospital")},
            inverseJoinColumns = {@JoinColumn(name = "id_doador")})
    private List<Doador> doadores = new ArrayList<>();

    public Hospital() {
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

    public List<Doador> getDoadores() {
        return doadores;
    }

    public void setDoadores(List<Doador> doadores) {
        this.doadores = doadores;
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
