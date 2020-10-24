package com.b4l.blood4life.repositorios;

import com.b4l.blood4life.dominios.AdministradorHospitalar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdministradorHospitalarRepository
        extends JpaRepository<AdministradorHospitalar, Integer> {

    @Query("SELECT u FROM AdministradorHospitalar u WHERE u.email = ?1 and u.senha = ?2")
    AdministradorHospitalar findByCredentials(String email, String senha);
}
