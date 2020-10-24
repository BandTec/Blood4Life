package com.b4l.blood4life.repositorios;


import com.b4l.blood4life.dominios.Doador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DoadoresRepository extends JpaRepository<Doador, Integer> {

    @Query("SELECT u FROM Doador u WHERE u.email = ?1 and u.senha = ?2")
    Doador findByCredentials(String email, String senha);
}
