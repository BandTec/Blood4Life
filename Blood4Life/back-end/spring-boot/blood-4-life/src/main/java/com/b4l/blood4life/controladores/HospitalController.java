package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.Hospital;
import com.b4l.blood4life.servicos.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<List<Hospital>> buscarTodosHospitais() {
        List<Hospital> hospitais = hospitalService.buscarTodos();
        return ResponseEntity.status(HttpStatus.OK).body(hospitais);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hospital> buscarHospitalPeloId(@PathVariable Integer id) {
        Hospital hospitalEncontrado = hospitalService.buscarPeloId(id);
        return ResponseEntity.status(HttpStatus.OK).body(hospitalEncontrado);
    }

    @PostMapping
    public ResponseEntity<Hospital> adicionarHospital(@RequestBody @Valid Hospital hospital) {
        Hospital hospitalAdicionado = hospitalService.adicionar(hospital);
        return ResponseEntity.status(HttpStatus.CREATED).body(hospitalAdicionado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Hospital> atualizarHospitalPeloId(
            @PathVariable Integer id,
            @Valid @RequestBody Hospital hospital
    ) {
        Hospital hospitalAtualizado = hospitalService.atualizarPeloId(id, hospital);
        return ResponseEntity.status(HttpStatus.OK).body(hospitalAtualizado);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarHospitalPeloId(@PathVariable Integer id) {
        hospitalService.deletarPeloId(id);
    }

}
