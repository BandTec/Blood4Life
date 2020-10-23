package com.b4l.blood4life.controladores;

import com.b4l.blood4life.repositorios.BancoDeSangueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tipos")
public class BancoDeSangueController {

    @Autowired
    BancoDeSangueRepository bancoDeSangueRepository;

    @GetMapping
    public ResponseEntity getBancosDeSangue() {
        if (bancoDeSangueRepository.count() > 0) {
            return ResponseEntity.ok(bancoDeSangueRepository.findAll());
        }

        return ResponseEntity.noContent().build();
    }

}
