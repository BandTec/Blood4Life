package com.b4l.blood4life.controladores;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.dominios.Hospital;
import com.b4l.blood4life.repositorios.DoadoresRepository;
import com.b4l.blood4life.repositorios.HospitalRepository;
import com.b4l.blood4life.utils.ListaObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/exportar")
public class ExportacaoController {

    @Autowired
    private DoadoresRepository doadoresRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    @GetMapping(value = "/txt/doadores", produces = {"text/plain"})
    @ResponseBody
    public ResponseEntity exportarDoadoresTXT() {

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
            doadoresTxt += d.toString();
            contaRegistros++;
        }

        doadoresTxt += String.format("02%010d", contaRegistros);

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment; filename=doadores.txt");

        return new ResponseEntity(doadoresTxt, headers, HttpStatus.OK);
    }

    @GetMapping(value = "/csv/doadores", produces = {"text/csv"})
    @ResponseBody
    public ResponseEntity exportarDoadoresCSV() {

        List<Doador> doadores = doadoresRepository.findAll();
        ListaObj<Doador> listaDoadores = new ListaObj<>((int) doadoresRepository.count());

        String doadoresCsv = "";

        for (Doador d : doadores) {
            listaDoadores.adiciona(d);
        }

        for (int i = 0; i < listaDoadores.getTamanho(); i++) {
            Doador d = listaDoadores.getElemento(i);
            doadoresCsv += String.format("%s;%s;%s;%s;%s%n", d.getNome(), d.formatarDataNascFormatada(),
                    d.getCpf(), d.getTelefone(), d.getTipoSanguineo());
        }

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment; filename=doadores.csv");

        return new ResponseEntity(doadoresCsv, headers, HttpStatus.OK);
    }

    @GetMapping(value = "/txt/hospitais", produces = {"text/plain"})
    @ResponseBody
    public ResponseEntity exportarHospitaisTXT() {

        List<Hospital> hospitais = hospitalRepository.findAll();
        ListaObj<Hospital> listaHospitais = new ListaObj<>((int) hospitalRepository.count());
        Integer contaRegistros = 0;

        Date agora = new Date();
        SimpleDateFormat formatador = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        String hospitaisTxt = String.format("00HOSPITAL%s01%n", formatador.format(agora));

        for (Hospital h : hospitais) {
            listaHospitais.adiciona(h);
        }

        for (int i = 0; i < listaHospitais.getTamanho(); i++) {
            Hospital h = listaHospitais.getElemento(i);
            hospitaisTxt += String.format(
                    "01%-45s%-14s%-30s%-30s%-30s%8s%-30s%-2s%-11s%n",
                    h.getNome(),
                    h.getCnpj(),
                    h.getEndereco().getCidade(),
                    h.getEndereco().getRua(),
                    h.getEndereco().getBairro(),
                    h.getEndereco().getCep(),
                    h.getEndereco().getComplemento(),
                    h.getEndereco().getUf(),
                    h.getTelefone()
            );
            contaRegistros++;
        }

        hospitaisTxt += String.format("02%010d", contaRegistros);

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment; filename=hospitais.txt");

        return new ResponseEntity(hospitaisTxt, headers, HttpStatus.OK);
    }

    @GetMapping(value = "/csv/hospitais", produces = {"text/csv"})
    @ResponseBody
    public ResponseEntity exportarHospitaisCSV() {

        List<Hospital> hospitais = hospitalRepository.findAll();
        ListaObj<Hospital> listaHospitais = new ListaObj<>((int) hospitalRepository.count());

        String hospitaisCsv = "";

        for (Hospital h : hospitais) {
            listaHospitais.adiciona(h);
        }

        for (int i = 0; i < listaHospitais.getTamanho(); i++) {
            Hospital h = listaHospitais.getElemento(i);
            hospitaisCsv += String.format(
                    "%s;%s;%s;%s;%s;%s;%s;%s;%s%n",
                    h.getNome(),
                    h.getCnpj(),
                    h.getEndereco().getCidade(),
                    h.getEndereco().getRua(),
                    h.getEndereco().getBairro(),
                    h.getEndereco().getCep(),
                    h.getEndereco().getComplemento(),
                    h.getEndereco().getUf(),
                    h.getTelefone()
            );
        }

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment; filename=hospitais.txt");

        return new ResponseEntity(hospitaisCsv, headers, HttpStatus.OK);
    }
}
