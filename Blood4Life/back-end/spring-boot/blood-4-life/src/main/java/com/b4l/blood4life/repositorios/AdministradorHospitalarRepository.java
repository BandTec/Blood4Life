package com.b4l.blood4life.repositorios;

import com.b4l.blood4life.dominios.AdministradorHospitalar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministradorHospitalarRepository
        extends JpaRepository<AdministradorHospitalar, Integer> {

    AdministradorHospitalar findByEmailAndSenha(String email, String senha);
}
