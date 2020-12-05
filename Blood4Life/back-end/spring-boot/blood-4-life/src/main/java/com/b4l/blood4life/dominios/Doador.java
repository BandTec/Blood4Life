package com.b4l.blood4life.dominios;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "doador")
public class Doador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_doador")
    private Integer id;

    @NotNull(message = "{nome.not.null}")
    @Size(min = 2, max = 45, message = "{nome.min.max}")
    private String nome;

    @Email(message = "{email.not.valid}")
    @NotNull(message = "{email.not.null}")
    @Size(min = 10, max = 60, message = "{email.mix.max}")
    private String email;

    @NotNull
    @Size(min = 8, max = 16)
    private String senha;

//    @NotNull
    @Size(min = 11, max = 11)
    private String cpf;

    @Past
    @NotNull
    private Date dtNascimento;

//    @NotNull
    @Size(min = 10, max = 11)
    private String telefone;

    @Size(max = 3)
    private String tipoSanguineo;

    private Character genero;

    @JsonIgnore
    @ManyToMany(mappedBy = "doadores")
    private List<Hospital> hospitais = new ArrayList<>();

    @Embedded
    private Endereco endereco;

    // Construtor default necessário para NÃO gerar erro na query
    public Doador() {
    }

    public Doador(
            @Email @NotNull @Size(min = 10, max = 60) String email,
            @NotNull @Size(min = 8, max = 16) String senha
    ) {
        this.email = email;
        this.senha = senha;
    }

    private Doador(
            Integer id,
            @NotNull @Size(min = 2, max = 45) String nome,
            @Email @NotNull @Size(min = 10, max = 60) String email,
            @NotNull @Size(min = 8, max = 16) String senha,
            @NotNull @Size(min = 11, max = 11) String cpf,
            @Past @NotNull Date dtNascimento,
            @NotNull @Size(min = 10, max = 11) String telefone,
            @Size(min = 2, max = 3) String tipoSanguineo,
            Character genero
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.dtNascimento = dtNascimento;
        this.telefone = telefone;
        this.tipoSanguineo = tipoSanguineo;
        this.genero = genero;
    }

    public Date getDtNascimento() {
        return dtNascimento;
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

    public void setDtNascimento(Date dtNascimento) {
        this.dtNascimento = dtNascimento;
    }

    public List<Hospital> getHospitais() {
        return hospitais;
    }

    public void setHospitais(List<Hospital> hospitais) {
        this.hospitais = hospitais;
    }

    @Override
    public String toString() {
        return String.format("01%-45s%-10s%11s%11s%-3s%n", getNome(), formatarDataNascFormatada(),
                getCpf(), getTelefone(), getTipoSanguineo());
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

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Doador)) return false;
        Doador doador = (Doador) o;
        return Objects.equals(getId(), doador.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}
