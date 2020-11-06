package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.servicos.DoadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/doadores")
public class DoadoresController {

    @Autowired
    private DoadorService doadorService;

    @GetMapping
    public ResponseEntity<List<Doador>> buscarTodosDoadores(
            @RequestParam(required = false) String tipoSanguineo
    ) {
        List<Doador> doadores = doadorService.buscarTodos(tipoSanguineo);
        return ResponseEntity.status(HttpStatus.OK).body(doadores);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doador> buscarDoadorPeloId(@PathVariable Integer id) {
        Doador doadorEncontrado = doadorService.buscarPeloId(id);
        return ResponseEntity.status(HttpStatus.OK).body(doadorEncontrado);
    }

    @PostMapping
    public ResponseEntity<Doador> adicionarDoador(@Valid @RequestBody Doador doador) {
        Doador doadorAdicionado = doadorService.adicionar(doador);
        return ResponseEntity.status(HttpStatus.CREATED).body(doadorAdicionado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Doador> atualizarDoadorPeloId(
            @PathVariable Integer id,
            @Valid @RequestBody Doador doador
    ) {
        Doador doadorAtualizado = doadorService.atualizarPeloId(id, doador);
        return ResponseEntity.status(HttpStatus.OK).body(doadorAtualizado);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarDoadorPeloId(@PathVariable Integer id) {
        doadorService.deletarPeloId(id);
    }

}


