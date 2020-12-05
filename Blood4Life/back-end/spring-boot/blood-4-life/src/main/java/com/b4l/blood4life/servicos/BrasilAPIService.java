package com.b4l.blood4life.servicos;

import com.b4l.blood4life.dominios.RespostaBrasilAPI;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "brasilapi", url = "https://brasilapi.com.br/")
public interface BrasilAPIService {

    @GetMapping("/api/cep/v1/{cep}")
    RespostaBrasilAPI getInfo(@PathVariable String cep);
}
