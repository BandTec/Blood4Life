package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.repositorios.DoadoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/doadores")
public class DoadoresController {

    @Autowired
    private DoadoresRepository repository;

    @GetMapping
    public ResponseEntity getDoadores(
            HttpSession session
    ) {
        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        if (repository.count() > 0) {
            List<Doador> doadores = repository.findAll();
            return ResponseEntity.ok(doadores);
        }

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{idDoador}")
    public ResponseEntity buscarUm(
            @PathVariable Integer idDoador,
            HttpSession session
    ) {
        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        Optional<Doador> doadorOptional = repository.findById(idDoador);
        return ResponseEntity.of(doadorOptional);
    }

    @PostMapping()
    public ResponseEntity criarDoador(
            @RequestBody @Valid Doador novoDoador,
            HttpSession session
    ) {
        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        repository.save(novoDoador);
        return ResponseEntity.created(null).build();
    }

    @PutMapping("/{idDoador}")
    public ResponseEntity alterarDoador(
            @PathVariable int idDoador,
            @Valid @RequestBody Doador novoDoador,
            HttpSession session
    ) {
        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        if (repository.existsById(idDoador)) {
            novoDoador.setId(idDoador);
            repository.save(novoDoador);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{idDoador}")
    public ResponseEntity excluirDoador(
            @PathVariable int idDoador,
            HttpSession session
    ) {
        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        if (repository.existsById(idDoador)) {
            repository.deleteById(idDoador);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }

//    @GetMapping()
//    public ResponseEntity listar(@RequestParam(required = false) String tipoSanguineo) {
//        Doador doador = new Doador(tipoSanguineo);
//        List<Doador> doadoresFiltrados = repository.findAll(Example.of(doador));
//        if (tipoSanguineo == null) {
//            if (repository.count() > 0){
//                return ResponseEntity.ok(repository.findAll());
//            }else {
//                return ResponseEntity.noContent().build();
//            }
//        } else {
//            if (doadoresFiltrados.isEmpty()){
//                return ResponseEntity.noContent().build();
//            }else{
//                return ResponseEntity.ok(doadoresFiltrados);
//            }
//        }
//    }

}
