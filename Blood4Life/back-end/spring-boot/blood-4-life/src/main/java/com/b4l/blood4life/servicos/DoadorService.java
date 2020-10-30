package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.event.RecursoCriadoEvent;
import com.b4l.blood4life.repositorios.DoadoresRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Service
public class DoadorService {

    @Autowired
    DoadoresRepository doadoresRepository;

    @Autowired
    private ApplicationEventPublisher publisher;

    public ResponseEntity<List<Doador>> buscarTodos(String tipoSanguineo) {
        if (tipoSanguineo == null) {
            return doadoresRepository.count() > 0
                    ? ResponseEntity.ok(doadoresRepository.findAll())
                    : ResponseEntity.noContent().build();
        }

        Doador doador = new Doador();
        doador.setTipoSanguineo(tipoSanguineo);
        List<Doador> doadoresFiltrados = doadoresRepository.findAll(Example.of(doador));

        return doadoresFiltrados.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(doadoresFiltrados);
    }

    public ResponseEntity<Doador> buscarPeloId(Integer id) {
        if (!doadoresRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        Doador doador = doadoresRepository.findById(id).get();
        return ResponseEntity.ok(doador);
    }

    public Doador adicionar(Doador doador, HttpServletResponse response) {
        Doador doadorSalvo = doadoresRepository.save(doador);

        publisher.publishEvent(
                new RecursoCriadoEvent(this, response, doadorSalvo.getId())
        );

        return doadorSalvo;
    }

    public ResponseEntity<Doador> atualizarPeloId(Integer id, Doador doador) {
        if (!doadoresRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        Doador doadorSalvo = doadoresRepository.save(doador);
        BeanUtils.copyProperties(doador, doadorSalvo, "id");
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<Doador> deletarPeloId(Integer id) {
        if (!doadoresRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        doadoresRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
