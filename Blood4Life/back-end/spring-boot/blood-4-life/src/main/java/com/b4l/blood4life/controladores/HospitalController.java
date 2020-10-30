package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.Hospital;
import com.b4l.blood4life.servicos.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/hospitais")
public class HospitalController {

    @Autowired
    HospitalService hospitalService;

    @GetMapping
    public ResponseEntity<List<Hospital>> buscarTodosHospitais() {
        return hospitalService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hospital> buscarHospitalPeloId(@PathVariable Integer id) {
        return hospitalService.buscarPeloId(id);
    }

    @PostMapping
    public ResponseEntity<Hospital> adicionarHospital(
            @RequestBody @Valid Hospital hospital,
            HttpServletResponse response
    ) {
        Hospital hospitalAdicionado = hospitalService.adicionar(hospital, response);
        return ResponseEntity.status(HttpStatus.CREATED).body(hospitalAdicionado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Hospital> atualizarHospitalPeloId(
            @PathVariable Integer id,
            @Valid @RequestBody Hospital hospital
    ) {
        return hospitalService.atualizarPeloId(id, hospital);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Hospital> deletarHospitalPeloId(@PathVariable Integer id) {
        return hospitalService.deletarPeloId(id);
    }

}
