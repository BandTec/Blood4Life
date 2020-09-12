package com.b4l.blood4life;

import java.util.ArrayList;
import java.util.List;

public class BancoDeSangue {

    private List<Sangue> sangueList;

    public BancoDeSangue(List<Sangue> sangueList) {
        this.sangueList = new ArrayList<>();
    }

    public void validarSangue(){

    }
    public void filtrarQuantidade(Sangue s){

    }
    public void cadastrarSangue (Sangue s){

    }
    public void atualizarQtdSangue() {

    }

    public List<Sangue> getSangueList() {
        return sangueList;
    }

    public void setSangueList(List<Sangue> sangueList) {
        this.sangueList = sangueList;
    }
}
