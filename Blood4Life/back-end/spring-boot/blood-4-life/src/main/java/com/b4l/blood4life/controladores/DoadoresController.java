package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.servicos.DoadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/doadores")
public class DoadoresController {

    @Autowired
    private DoadorService doadorService;

    @GetMapping()
    public ResponseEntity<List<Doador>> buscarTodosDoadores(
            @RequestParam(required = false) String tipoSanguineo
    ) {
        return doadorService.buscarTodos(tipoSanguineo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doador> buscarDoadorPeloId(@PathVariable Integer id) {
        return doadorService.buscarPeloId(id);
    }

    @PostMapping()
    public ResponseEntity<Doador> adicionarDoador(
            @Valid @RequestBody Doador doador,
            HttpServletResponse response
    ) {
        Doador doadorAdicionado = doadorService.adicionar(doador, response);
        return ResponseEntity.status(HttpStatus.CREATED).body(doadorAdicionado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Doador> atualizarDoadorPeloId(
            @PathVariable Integer id,
            @Valid @RequestBody Doador doador
    ) {
        return doadorService.atualizarPeloId(id, doador);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Doador> deletarDoadorPeloId(@PathVariable Integer id) {
        return doadorService.deletarPeloId(id);
    }
}


