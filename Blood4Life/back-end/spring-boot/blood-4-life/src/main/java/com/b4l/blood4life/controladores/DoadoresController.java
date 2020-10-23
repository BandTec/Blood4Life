package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.repositorios.DoadoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import javax.validation.Valid;
import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/doadores")
public class DoadoresController {

    @Autowired
    private DoadoresRepository repository;

    @GetMapping()
    public ResponseEntity listar(@RequestParam(required = false) String tipoSanguineo) {
        Doador doador = new Doador(tipoSanguineo);
        List<Doador> doadoresFiltrados = repository.findAll(Example.of(doador));
        if (tipoSanguineo == null) {
            if (repository.count() > 0){
                return ResponseEntity.ok(repository.findAll());
            }else {
                return ResponseEntity.noContent().build();
            }
        } else {
            if (doadoresFiltrados.isEmpty()){
                return ResponseEntity.noContent().build();
            }else{
                return ResponseEntity.ok(doadoresFiltrados);
            }
        }
    }

    @GetMapping("/{idDoador}")
    public ResponseEntity buscarUm(@PathVariable Integer idDoador){
        Optional<Doador> doadorOptional = repository.findById(idDoador);
        return ResponseEntity.of(doadorOptional);
    }

    @PostMapping()
    public ResponseEntity criarDoador(@RequestBody @Valid Doador novoDoador) {
        repository.save(novoDoador);
        return ResponseEntity.created(null).build();
    }

    @PutMapping("/{idDoador}")
    public ResponseEntity alterarDoador(@PathVariable int idDoador,
                                        @Valid @RequestBody Doador novoDoador){
        if (repository.existsById(idDoador)){
            novoDoador.setId(idDoador);
            repository.save(novoDoador);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{idDoador}")
    public ResponseEntity excluirDoador(@PathVariable int idDoador){
        if (repository.existsById(idDoador)){
            repository.deleteById(idDoador);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }


}
