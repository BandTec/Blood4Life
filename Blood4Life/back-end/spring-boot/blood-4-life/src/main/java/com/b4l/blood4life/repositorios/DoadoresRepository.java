package com.b4l.blood4life.repositorios;


import com.b4l.blood4life.dominios.Doador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DoadoresRepository extends JpaRepository<Doador, Integer> {

    @Query("Select d FROM Doador d where d.tipoSanguineo = ?1 ")
    List<Doador> findAllBytipoSanguineo(String tipoSanguineo);


}
