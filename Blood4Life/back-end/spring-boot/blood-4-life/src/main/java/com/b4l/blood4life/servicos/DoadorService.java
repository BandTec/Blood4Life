package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.exception.NoContentException;
import com.b4l.blood4life.exception.ResourceNotFoundException;
import com.b4l.blood4life.repositorios.DoadoresRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class DoadorService {

    @Autowired
    DoadoresRepository doadoresRepository;

    @Autowired
    private BrasilAPIService brasilAPIService;

    public List<Doador> buscarTodos(String tipoSanguineo) {
        if (tipoSanguineo == null) {
            List<Doador> doadores = doadoresRepository.findAll();

            if (doadores.isEmpty()) {
                throw new NoContentException("Não há Doadores cadastrados.");
            }

            return doadores;
        }

        List<Doador> doadoresFiltrados = doadoresRepository.findAllByTipoSanguineo(tipoSanguineo);

        if (doadoresFiltrados.isEmpty()) {
            throw new NoContentException("Não há Doadores cadastrados com o tipo sanguíneo " + tipoSanguineo);
        }

        return doadoresFiltrados;
    }

    public Doador buscarPeloId(Integer id) {
        verificarSeDoadorExiste(id);

        Optional<Doador> doadorEncontrado = doadoresRepository.findById(id);
        return doadorEncontrado.get();
    }


    @Transactional
    public Doador adicionar(Doador doador) {
        Doador doadorSalvo = doadoresRepository.save(doador);
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
