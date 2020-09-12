package com.b4l.blood4life;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UsuarioController {

    boolean autenticado;

    @PostMapping("/doador")
    public ResponseEntity logarDoador(@RequestParam String email, @RequestParam String senha){
        if (email.equals("daniel.juncks@bandtec.com.br") && senha.equals("12345")){
            autenticado = true;
            return ResponseEntity.ok("Autenticado com sucesso!");
        }
        else{
            autenticado = false;
            return ResponseEntity.status(404).build();
        }
    }
    @PostMapping("/adm")
    public ResponseEntity logarAdm(@RequestParam String email, @RequestParam String senha){
        if (email.equals("blood4life@bandtec.com.br") && senha.equals("12345")){
            autenticado = true;
            return ResponseEntity.ok("Autenticado com sucesso!");
        }
        else{
            autenticado = false;
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping
    public ResponseEntity deslogar(){
        if (autenticado){
            autenticado = false;
            return ResponseEntity.status(200).build();
        }
        else{
            return ResponseEntity.status(500).build();
        }
    }
}
