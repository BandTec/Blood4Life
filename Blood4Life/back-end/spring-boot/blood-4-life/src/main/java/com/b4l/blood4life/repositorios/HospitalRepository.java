package com.b4l.blood4life.repositorios;

import com.b4l.blood4life.dominios.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Integer> {
    Hospital findByEmailAndSenha(String email, String senha);
}
