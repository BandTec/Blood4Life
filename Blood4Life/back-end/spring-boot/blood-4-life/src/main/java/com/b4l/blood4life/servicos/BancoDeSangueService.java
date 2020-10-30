package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.BancoDeSangue;
import com.b4l.blood4life.repositorios.BancoDeSangueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BancoDeSangueService {

    @Autowired
    BancoDeSangueRepository bancoDeSangueRepository;

    public ResponseEntity<List<BancoDeSangue>> buscarTodos() {
        List<BancoDeSangue> bancoDeSangues = bancoDeSangueRepository.findAll();

        if (bancoDeSangues.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(bancoDeSangues);
    }
}
