package com.b4l.blood4life.controladores;

import com.b4l.blood4life.utils.ListaObj;
import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.repositorios.DoadoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/exportar")
public class ExportacaoController {

    @Autowired
    private DoadoresRepository doadoresRepository;

    @GetMapping(value = "/txt/doadores", produces = {"text/plain"})
    @ResponseBody
    public ResponseEntity exportarTXT(HttpSession session) {

        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        List<Doador> doadores = doadoresRepository.findAll();
        ListaObj<Doador> listaDoadores = new ListaObj<>((int) doadoresRepository.count());
        Integer contaRegistros = 0;

        Date agora = new Date();
        SimpleDateFormat formatador = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        String doadoresTxt = String.format("00DOADOR%s01%n", formatador.format(agora));

        for (Doador d : doadores) {
            listaDoadores.adiciona(d);
        }

        for (int i = 0; i < listaDoadores.getTamanho(); i++) {
            Doador d = listaDoadores.getElemento(i);
            doadoresTxt += String.format("01%-45s%-10s%11s%11s%-3s%n", d.getNome(), d.formatarDataNascFormatada(), d.getCpf(), d.getTelefone(), d.getTipoSanguineo());
            contaRegistros++;
        }

        doadoresTxt += String.format("02%010d", contaRegistros);

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment; filename=doadores.txt");

        return new ResponseEntity(doadoresTxt, headers, HttpStatus.OK);
    }

    @GetMapping(value = "/csv/doadores", produces = {"text/csv"})
    @ResponseBody
    public ResponseEntity exportarCSV(HttpSession session) {

        if (session.getAttribute("usuarioLogado") == null) {
            return ResponseEntity.status(401).build();
        }

        List<Doador> doadores = doadoresRepository.findAll();
        ListaObj<Doador> listaDoadores = new ListaObj<>((int) doadoresRepository.count());

        String doadoresCsv = "";

        for (Doador d : doadores) {
            listaDoadores.adiciona(d);
        }

        for (int i = 0; i < listaDoadores.getTamanho(); i++) {
            Doador d = listaDoadores.getElemento(i);
            doadoresCsv += String.format("%s;%s;%s;%s;%s%n", d.getNome(), d.formatarDataNascFormatada(), d.getCpf(), d.getTelefone(), d.getTipoSanguineo());
        }

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment; filename=doadores.csv");

        return new ResponseEntity(doadoresCsv, headers, HttpStatus.OK);
    }
}
