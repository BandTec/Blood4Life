package com.b4l.blood4life.repositorios;

import com.b4l.blood4life.dominios.Doador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoadoresRepository extends JpaRepository<Doador, Integer> {

    Doador findByEmailAndSenha(String email, String senha);

    List<Doador> findAllByTipoSanguineo(String tipoSanguineo);
}
