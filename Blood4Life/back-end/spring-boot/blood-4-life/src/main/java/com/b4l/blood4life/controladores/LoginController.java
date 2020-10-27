package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.AdministradorHospitalar;
import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.repositorios.AdministradorHospitalarRepository;
import com.b4l.blood4life.repositorios.DoadoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@RestController
@RequestMapping("/user")
public class LoginController {

    @Autowired
    DoadoresRepository doadoresRepository;

    @Autowired
    AdministradorHospitalarRepository admRepository;

    @PostMapping("/doador")
    public ResponseEntity loginDoador(
            @RequestParam @Email @NotBlank @Size(min = 10, max = 60) String email,
            @RequestParam @NotBlank @Size(min = 8, max = 16) String senha,
            HttpSession session
    ) {
        Doador doador = doadoresRepository.findByEmailAndSenha(email, senha);

        try {
            if (doador.getId() == null) {
                throw new Exception("Erro");
            }
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }

        if (email.equals(doador.getEmail()) && senha.equals(doador.getSenha())) {
            session.setAttribute("usuarioLogado", doador);
            return ResponseEntity.ok("Usuário válido");
        }

        return ResponseEntity.ok("Email ou senha inválida!");
    }

    @PostMapping("/adm")
    public ResponseEntity loginAdm(
            @RequestParam @Email @NotBlank @Size(min = 10, max = 60) String email,
            @RequestParam @NotBlank @Size(min = 8, max = 16) String senha,
            HttpSession session
    ) {
        AdministradorHospitalar adm = admRepository.findByEmailAndSenha(email, senha);

        try {
            if (adm.getId() == null) {
                throw new Exception();
            }
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }

        if (email.equals(adm.getEmail()) && senha.equals(adm.getSenha())) {
            session.setAttribute("usuarioLogado", adm);
            return ResponseEntity.ok("Usuário válido");
        }

        return ResponseEntity.ok("Email ou senha inválida!");
    }

    @PostMapping("/logout")
    public ResponseEntity efetuarLogout(HttpSession session) {
        session.invalidate();

        return ResponseEntity.ok().build();
    }
}
