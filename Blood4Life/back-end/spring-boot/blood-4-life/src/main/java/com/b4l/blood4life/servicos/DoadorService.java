package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.Doador;
import com.b4l.blood4life.exception.NoContentException;
import com.b4l.blood4life.exception.ResourceNotFoundException;
import com.b4l.blood4life.repositorios.DoadoresRepository;
import com.b4l.blood4life.utils.FilaObj;
import com.b4l.blood4life.utils.JavaMail;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DoadorService {

    @Autowired
    DoadoresRepository doadoresRepository;

    private FilaObj<String> filaEmails = new FilaObj<>(100);

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
        filaEmails.insert(doadorSalvo.getEmail());
        return doadorSalvo;
    }

    public Doador atualizarPeloId(Integer id, Doador doador) {
        verificarSeDoadorExiste(id);

        Doador doadorAtualizado = doadoresRepository.save(doador);
        BeanUtils.copyProperties(doador, doadorAtualizado, "id");
        return doadorAtualizado;
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

    @Scheduled(fixedDelay = 10000)
    public void registrador() throws Exception {
        if (!filaEmails.isEmpty()) {
            System.out.println("Iniciando envio de e-mails...");

            while (!filaEmails.isEmpty()) {
                String email = filaEmails.poll();
                JavaMail.sendMail(email);
            }

        }
    }

}
