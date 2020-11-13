//package com.b4l.blood4life.repositorios;
//
//import com.b4l.blood4life.dominios.Doador;
//import org.assertj.core.api.Assertions;
//import org.junit.jupiter.api.MethodOrderer;
//import org.junit.jupiter.api.Order;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.TestMethodOrder;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import java.time.LocalDate;
//
///**
// * Um teste é composto de três etapas:
// * (1) Cenário
// * (2) Ação/Execução
// * (3) Verificação
// */
//
//@SpringBootTest
//@ActiveProfiles("test")
//@ExtendWith(SpringExtension.class)
//@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
//public class DoadorRepositoryTest {
//
//    @Autowired
//    DoadoresRepository doadoresRepository;
//
//    @Test
//    @Order(1)
//    public void deveRetornarUmDoadorComAsMesmasCredenciais() {
//        // (1) Cenário
//        Doador doador = new Doador.Builder()
//                .setId(1)
//                .setNome("usuario")
//                .setEmail("usuario@email.com")
//                .setSenha("senha123")
//                .setCpf("99999999999")
//                .setDtNascimento(LocalDate.of(1970, 1, 1))
//                .setTelefone("11970707070")
//                .setTipoSanguineo("B+")
//                .setGenero('M')
//                .build();
//
//        doadoresRepository.save(doador);
//
//        // (2) Ação/Execução
//        Doador doadorEncontrado = doadoresRepository
//                .findByEmailAndSenha("usuario@email.com", "senha123");
//
//        Boolean resultado = doador.equals(doadorEncontrado);
//
//        // (3) Verificação
//        Assertions.assertThat(resultado).isTrue();
//    }
//
//    @Test
//    @Order(2)
//    public void deveRetornarFalsoQuandoNaoHouverUmDoadorComAsCredenciaisInformadas() {
//        Boolean resultado = doadoresRepository
//                .existsByEmailAndSenha("exemplo@exemplo.com", "exemplo123");
//
//        Assertions.assertThat(resultado).isFalse();
//    }
//}
