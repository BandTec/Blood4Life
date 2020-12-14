package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.BancoDeSangue;
import com.b4l.blood4life.servicos.BancoDeSangueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.ResponseEntity.status;

@Validated
@RestController
@RequestMapping("/tipos")
public class BancoDeSangueController {

    @Autowired
    BancoDeSangueService bancoDeSangueService;

    @GetMapping
    public ResponseEntity<List<BancoDeSangue>> buscarTodos() {
        List<BancoDeSangue> bancoDeSangue = bancoDeSangueService.buscarTodos();
        return status(HttpStatus.OK).body(bancoDeSangue);
    }

    @GetMapping("/{tipo}")
    public ResponseEntity<BancoDeSangue> buscarPeloTipoSanguineo(@PathVariable String tipo) {
        BancoDeSangue bancoDeSangue = bancoDeSangueService.buscarBancoDeSanguePeloTipoSanguineo(tipo);
        return status(HttpStatus.OK).body(bancoDeSangue);
    }

    @PostMapping
    public ResponseEntity<BancoDeSangue> cadastrar(@Valid @RequestBody BancoDeSangue bancoDeSangue) {
        BancoDeSangue bancoDeSangueCadastrado = bancoDeSangueService.cadastrarBancoDeSangue(bancoDeSangue);
        return status(HttpStatus.CREATED).body(bancoDeSangueCadastrado);
    }

    @PostMapping("/lista")
    public ResponseEntity<List<BancoDeSangue>> cadastrarLista(@Valid @RequestBody List<BancoDeSangue> bancosDeSangue) {
        List<BancoDeSangue> bancosDeSangueCadastrados = bancoDeSangueService.cadastrarBancosDeSangue(bancosDeSangue);
        return status(HttpStatus.CREATED).body(bancosDeSangueCadastrados);
    }

    @PutMapping("/{idHospital}/{tipo}")
    public ResponseEntity atualizarBancoDeSangue(
            @PathVariable Integer idHospital,
            @PathVariable String tipo,
            @RequestParam Double quantidade
    ) {
        BancoDeSangue bancoDeSangue = bancoDeSangueService.atualizarBancoDeSangue(idHospital, tipo, quantidade);
        return ResponseEntity.status(HttpStatus.OK).body(bancoDeSangue);
    }

}
