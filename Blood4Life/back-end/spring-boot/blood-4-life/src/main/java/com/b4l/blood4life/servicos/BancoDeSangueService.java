package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.BancoDeSangue;
import com.b4l.blood4life.exception.NoContentException;
import com.b4l.blood4life.exception.ResourceNotFoundException;
import com.b4l.blood4life.repositorios.BancoDeSangueRepository;
import com.b4l.blood4life.repositorios.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
