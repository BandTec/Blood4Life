package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.Hospital;
import com.b4l.blood4life.repositorios.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@RestController
@RequestMapping("/hospitais")
public class HospitalController {

    @Autowired
    HospitalRepository hospitalRepository;

    @GetMapping
    public ResponseEntity getHospitais(
            HttpSession session
    ) {
        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        return hospitalRepository.count() > 0
                ? ResponseEntity.ok(hospitalRepository.findAll())
                : ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity getHospitalById(
            @PathVariable Integer id,
            HttpSession session
    ) {
        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        return hospitalRepository.existsById(id)
                ? ResponseEntity.ok(hospitalRepository.findById(id))
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity adicionaHospital(
            @RequestBody @Valid Hospital hospital,
            HttpSession session
    ) {
        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        hospitalRepository.save(hospital);
        return ResponseEntity.created(null).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity editaHospital(
            @PathVariable Integer id,
            @Valid @RequestBody Hospital hospital,
            HttpSession session
    ) {
        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        if (hospitalRepository.existsById(id)) {
            hospital.setId(id);
            hospitalRepository.save(hospital);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletaHospital(
            @PathVariable Integer id,
            HttpSession session
    ) {
        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        if (hospitalRepository.existsById(id)) {
            hospitalRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }

}
