package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.Hospital;
import com.b4l.blood4life.exception.NoContentException;
import com.b4l.blood4life.exception.ResourceNotFoundException;
import com.b4l.blood4life.repositorios.HospitalRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class HospitalService {

    @Autowired
    HospitalRepository hospitalRepository;

    @Autowired
    private ApplicationEventPublisher publisher;

    public List<Hospital> buscarTodos() {
        List<Hospital> hospitais = hospitalRepository.findAll();

        if (hospitais.isEmpty()) {
            throw new NoContentException("Não há Hospitais cadastrados.");
        }

        return hospitais;
    }

    public Hospital buscarPeloId(Integer id) {
        verificarSeHospitalExiste(id);

        Optional<Hospital> hospitalEncontrado = hospitalRepository.findById(id);
        return hospitalEncontrado.get();
    }

    @Transactional
    public Hospital adicionar(Hospital hospital) {
        Hospital hospitalSalvo = hospitalRepository.save(hospital);
        return hospitalSalvo;
    }

    public Hospital atualizarPeloId(Integer id, Hospital hospital) {
        verificarSeHospitalExiste(id);

        Hospital hospitalAtualizado = hospitalRepository.save(hospital);
        BeanUtils.copyProperties(hospital, hospitalAtualizado, "id");
        return hospitalAtualizado;
    }

    public void deletarPeloId(Integer id) {
        verificarSeHospitalExiste(id);

        hospitalRepository.deleteById(id);
    }

    private void verificarSeHospitalExiste(Integer id) {
        if (!hospitalRepository.existsById(id)) {
            throw new ResourceNotFoundException("Hospital não encontrado para o ID: " + id);
        }
    }
}
