package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.Hospital;
import com.b4l.blood4life.event.RecursoCriadoEvent;
import com.b4l.blood4life.repositorios.HospitalRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Service
public class HospitalService {

    @Autowired
    HospitalRepository hospitalRepository;

    @Autowired
    private ApplicationEventPublisher publisher;

    public ResponseEntity<List<Hospital>> buscarTodos() {
        List<Hospital> hospitais = hospitalRepository.findAll();

        if (hospitais.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(hospitais);
    }

    public ResponseEntity<Hospital> buscarPeloId(Integer id) {
        if (!hospitalRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        Hospital hospital = hospitalRepository.findById(id).get();
        return ResponseEntity.ok(hospital);
    }

    public Hospital adicionar(Hospital hospital, HttpServletResponse response) {
        Hospital hospitalSalvo = hospitalRepository.save(hospital);

        publisher.publishEvent(
                new RecursoCriadoEvent(this, response, hospitalSalvo.getId())
        );

        return hospitalSalvo;
    }

    public ResponseEntity<Hospital> atualizarPeloId(Integer id, Hospital hospital) {
        if (!hospitalRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        Hospital hospitalSalvo = hospitalRepository.save(hospital);
        BeanUtils.copyProperties(hospital, hospitalSalvo, "id");
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<Hospital> deletarPeloId(Integer id) {
        if (!hospitalRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        hospitalRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
