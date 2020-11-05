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

    // TODO: Criar uma exception caso a lista esteja vazia
    @GetMapping()
    public ResponseEntity<List<Doador>> buscarTodosDoadores(
            @RequestParam(required = false) String tipoSanguineo
    ) {
        return doadorService.buscarTodos(tipoSanguineo);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Doador buscarDoadorPeloId(@PathVariable Integer id) {
        Doador doadorEncontrado = doadorService.buscarPeloId(id);
        return doadorEncontrado;
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Doador> adicionarDoador(
            @Valid @RequestBody Doador doador,
            HttpServletResponse response
    ) {
        Doador doadorAdicionado = doadorService.adicionar(doador, response);
        return ResponseEntity.status(HttpStatus.CREATED).body(doadorAdicionado);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Doador atualizarDoadorPeloId(
            @PathVariable Integer id,
            @Valid @RequestBody Doador doador
    ) {
        Doador doadorAtualizado = doadorService.atualizarPeloId(id, doador);
        return doadorAtualizado;
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarDoadorPeloId(@PathVariable Integer id) {
        doadorService.deletarPeloId(id);
    }
}


