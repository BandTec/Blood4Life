package com.b4l.blood4life.repositorios;

import com.b4l.blood4life.dominios.Doador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DoadoresRepository extends JpaRepository<Doador, Integer> {

//    Optional<Doador> findByEmailAndSenha(String email, String senha);
    Doador findByEmailAndSenha(String email, String senha);

    Boolean existsByEmailAndSenha(String email, String senha);

    List<Doador> findAllByTipoSanguineo(String tipoSanguineo);
}
