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

    // TODO: Criar uma exception caso a lista esteja vazia
    @GetMapping
    public ResponseEntity<List<Hospital>> buscarTodosHospitais() {
        return hospitalService.buscarTodos();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Hospital buscarHospitalPeloId(@PathVariable Integer id) {
        Hospital hospitalEncontrado = hospitalService.buscarPeloId(id);

        return hospitalEncontrado;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Hospital adicionarHospital(
            @RequestBody @Valid Hospital hospital,
            HttpServletResponse response
    ) {
        Hospital hospitalAdicionado = hospitalService.adicionar(hospital, response);

        return hospitalAdicionado;
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Hospital atualizarHospitalPeloId(
            @PathVariable Integer id,
            @Valid @RequestBody Hospital hospital
    ) {
        Hospital hospitalAtualizado = hospitalService.atualizarPeloId(id, hospital);

        return hospitalAtualizado;
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarHospitalPeloId(@PathVariable Integer id) {
        hospitalService.deletarPeloId(id);
    }

}
