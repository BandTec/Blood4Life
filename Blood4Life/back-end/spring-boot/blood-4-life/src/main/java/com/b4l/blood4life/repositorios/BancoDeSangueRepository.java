package com.b4l.blood4life.repositorios;

import com.b4l.blood4life.dominios.BancoDeSangue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BancoDeSangueRepository extends JpaRepository<BancoDeSangue, Integer> {

    Boolean existsByTipoSangue(String tipoSangue);

    BancoDeSangue findByTipoSangue(String tipoSangue);

    BancoDeSangue findByTipoSangueAndHospitalId(String tipoSangue, Integer hospitalId);
}
