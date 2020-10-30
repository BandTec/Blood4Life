package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.Hospital;
import com.b4l.blood4life.servicos.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/hospitais")
public class HospitalController {

    @Autowired
    HospitalService hospitalService;

    @GetMapping
    public ResponseEntity<List<Hospital>> getHospitais() {
        return hospitalService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hospital> getHospitalById(@PathVariable Integer id) {
        return hospitalService.getHospitalById(id);
    }

    @PostMapping
    public ResponseEntity<Hospital> adicionaHospital(@RequestBody @Valid Hospital hospital) {
        return hospitalService.save(hospital);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Hospital> editaHospital(
            @PathVariable Integer id,
            @Valid @RequestBody Hospital hospital
    ) {
        return hospitalService.update(id, hospital);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Hospital> deletaHospital(@PathVariable Integer id) {
        return hospitalService.remove(id);
    }

}
