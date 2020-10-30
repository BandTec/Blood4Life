package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.Hospital;
import com.b4l.blood4life.repositorios.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HospitalService {

    @Autowired
    HospitalRepository hospitalRepository;

    public ResponseEntity<List<Hospital>> getAll() {
        List<Hospital> hospitais = hospitalRepository.findAll();

        if (hospitais.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(hospitais);
    }

    public ResponseEntity<Hospital> getHospitalById(Integer id) {
        if (!hospitalRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        Hospital hospital = hospitalRepository.findById(id).get();
        return ResponseEntity.ok(hospital);
    }

    public ResponseEntity<Hospital> save(Hospital hospital) {
        hospitalRepository.save(hospital);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    public ResponseEntity<Hospital> update(Integer id, Hospital hospital) {
        if (!hospitalRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        hospital.setId(id);
        hospitalRepository.save(hospital);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<Hospital> remove(Integer id) {
        if (!hospitalRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        hospitalRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
