package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.BancoDeSangue;
import com.b4l.blood4life.dominios.Hospital;
import com.b4l.blood4life.exception.NoContentException;
import com.b4l.blood4life.exception.ResourceNotFoundException;
import com.b4l.blood4life.repositorios.BancoDeSangueRepository;
import com.b4l.blood4life.repositorios.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class BancoDeSangueService {

    @Autowired
    BancoDeSangueRepository bancoDeSangueRepository;

    @Autowired
    HospitalRepository hospitalRepository;

    public List<BancoDeSangue> buscarTodos() {
        List<BancoDeSangue> bancoDeSangue = bancoDeSangueRepository.findAll();

        if (bancoDeSangue.isEmpty()) {
            throw new NoContentException("Não há Banco de Sangue cadastrado.");
        }

        return bancoDeSangue;
    }

    public BancoDeSangue buscarBancoDeSanguePeloTipoSanguineo(String tipo) {
        verificarSeTipoSanguineoExiste(tipo);

        return bancoDeSangueRepository.findByTipoSangue(tipo);
    }

    @Transactional
    public BancoDeSangue cadastrarBancoDeSangue(BancoDeSangue bancoDeSangue) {
        return bancoDeSangueRepository.save(bancoDeSangue);
    }

    @Transactional
    public List<BancoDeSangue> cadastrarBancosDeSangue(List<BancoDeSangue> bancosDeSangue) {
        return bancoDeSangueRepository.saveAll(bancosDeSangue);
    }

    public BancoDeSangue atualizarBancoDeSangue(Integer idHospital, String tipoSanguineo, Double quantidade) {
        verificarSeTipoSanguineoExiste(tipoSanguineo);

        BancoDeSangue bancoDeSangue = bancoDeSangueRepository.findByTipoSangueAndHospitalId(tipoSanguineo, idHospital);

        bancoDeSangue.setQtdAtual(quantidade);

        return bancoDeSangueRepository.save(bancoDeSangue);
    }

//    public void deletarBancoDeSangue(String tipoSanguineo) {
//        verificarSeTipoSanguineoExiste(tipoSanguineo);
//
//        BancoDeSangue bancoDeSangue = bancoDeSangueRepository.findByTipoSangue(tipoSanguineo);
//
//        bancoDeSangueRepository.delete(bancoDeSangue);
//    }

    private void verificarSeTipoSanguineoExiste(String tipo) {
        if (!bancoDeSangueRepository.existsByTipoSangue(tipo)) {
            throw new ResourceNotFoundException("Tipo Sanguíneo não encontrado.");
        }
    }

    public void atualizarBancoDeSanguePorDocumento(MultipartFile arquivo) throws IOException {
        String conteudo = new String(arquivo.getBytes(), StandardCharsets.UTF_8);
        String[] registros = conteudo.split("\n");

        for (int i = 1; i < (registros.length - 1); i++) {
            String tipoSangue = registros[i].substring(9, 17).trim();
            Double qtdAtual = Double.parseDouble(registros[i].substring(18, 38).trim());
            Integer idHospital = Integer.parseInt(registros[i].substring(37, 48).trim());

            Hospital hospital = new Hospital();
            hospital.setId(idHospital);

            BancoDeSangue bancoDeSangue = new BancoDeSangue(tipoSangue, qtdAtual, hospital);
            bancoDeSangueRepository.save(bancoDeSangue);
        }
    }

}
