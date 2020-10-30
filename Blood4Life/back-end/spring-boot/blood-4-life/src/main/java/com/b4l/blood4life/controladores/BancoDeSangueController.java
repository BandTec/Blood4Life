package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.BancoDeSangue;
import com.b4l.blood4life.servicos.BancoDeSangueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tipos")
public class BancoDeSangueController {

    @Autowired
    BancoDeSangueService bancoDeSangueService;

    @GetMapping
    public ResponseEntity<List<BancoDeSangue>> buscarTodosBancosDeSangue() {
        return bancoDeSangueService.buscarTodos();
    }

}
