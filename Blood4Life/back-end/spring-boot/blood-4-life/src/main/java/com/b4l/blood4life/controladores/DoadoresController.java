package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.repositorios.DoadoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doadores")
public class DoadoresController {

    @Autowired
    private DoadoresRepository repository;


    @PostMapping()
    public ResponseEntity criarDoador(@RequestBody Doador novoDoador){
        repository.save(novoDoador);
        return ResponseEntity.created(null).build();
    }

    @GetMapping()
    public ResponseEntity listar(){
        return ResponseEntity.ok(repository.findAll());
    }




}
