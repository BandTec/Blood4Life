package com.b4l.blood4life.repositorios;

import com.b4l.blood4life.dominios.Doador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoadoresRepository extends JpaRepository<Doador, Integer> {

    //    Optional<Doador> findByEmailAndSenha(String email, String senha);
    Doador findByEmailAndSenha(String email, String senha);

    Boolean existsByEmailAndSenha(String email, String senha);

    List<Doador> findAllByTipoSanguineo(String tipoSanguineo);
}
