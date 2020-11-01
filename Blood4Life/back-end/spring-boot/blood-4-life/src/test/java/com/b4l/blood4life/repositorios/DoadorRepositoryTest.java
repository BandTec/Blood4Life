package com.b4l.blood4life.repositorios;

import com.b4l.blood4life.dominios.Doador;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;

/**
 * Um teste é composto de três etapas:
 * (1) Cenário
 * (2) Ação/Execução
 * (3) Verificação
 */

@SpringBootTest
@ActiveProfiles("test")
@ExtendWith(SpringExtension.class)
public class DoadorRepositoryTest {

    @Autowired
    DoadoresRepository repository;

    @Test
    public void deveRetornarUmDoadorComAsMesmasCredenciais() {
        // (1) Cenário
        Doador doador = new Doador.Builder()
                .setId(1)
                .setNome("usuario")
                .setEmail("usuario@email.com")
                .setSenha("senha123")
                .setCpf("99999999999")
                .setDtNascimento(LocalDate.of(1970, 1, 1))
                .setTelefone("11970707070")
                .setTipoSanguineo("B+")
                .setGenero('M')
                .build();

        repository.save(doador);

        // (2) Ação/Execução
        Doador doadorEncontrado = repository
                .findByEmailAndSenha("usuario@email.com", "senha123");

        Boolean resultado = doador.equals(doadorEncontrado);

        // (3) Verificação
        Assertions.assertThat(resultado).isTrue();
    }
}
