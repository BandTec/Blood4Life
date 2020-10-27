package com.b4l.blood4life.repositorios;


import com.b4l.blood4life.dominios.Doador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoadoresRepository extends JpaRepository<Doador, Integer> {

    Doador findByEmailAndSenha(String email, String senha);
}
