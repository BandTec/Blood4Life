package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.event.RecursoCriadoEvent;
import com.b4l.blood4life.exception.ResourceNotFoundException;
import com.b4l.blood4life.repositorios.DoadoresRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Service
public class DoadorService {

    @Autowired
    DoadoresRepository doadoresRepository;

    @Autowired
    private ApplicationEventPublisher publisher;

    // TODO: Refatorar => findAllByTipoSanguineo
    public ResponseEntity<List<Doador>> buscarTodos(String tipoSanguineo) {
        if (tipoSanguineo == null) {
            return doadoresRepository.count() > 0
                    ? ResponseEntity.ok(doadoresRepository.findAll())
                    : ResponseEntity.noContent().build();
        }

        List<Doador> doadoresFiltrados = doadoresRepository.findAllByTipoSanguineo(tipoSanguineo);

        return doadoresFiltrados.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(doadoresFiltrados);
    }

    public Doador buscarPeloId(Integer id) {
        verificarSeDoadorExiste(id);

        Doador doadorEncontrado = doadoresRepository.findById(id).get();
        return doadorEncontrado;
    }


    @Transactional
    public Doador adicionar(Doador doador, HttpServletResponse response) {
        Doador doadorSalvo = doadoresRepository.save(doador);
        publisher.publishEvent(new RecursoCriadoEvent(this, response, doadorSalvo.getId()));
        return doadorSalvo;
    }

    public Doador atualizarPeloId(Integer id, Doador doador) {
        verificarSeDoadorExiste(id);

        Doador hospitalAtualizado = doadoresRepository.save(doador);
        BeanUtils.copyProperties(doador, hospitalAtualizado, "id");
        return hospitalAtualizado;
    }

    public void deletarPeloId(Integer id) {
        verificarSeDoadorExiste(id);

        doadoresRepository.deleteById(id);
    }

    private void verificarSeDoadorExiste(Integer id) {
        if (!doadoresRepository.existsById(id)) {
            throw new ResourceNotFoundException("Doador não encontrado para o ID: " + id);
        }
    }

}
