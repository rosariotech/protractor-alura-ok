import { element } from "protractor";
import { InicioPO } from "../page-objects/inicio.po";

let inicio = new InicioPO();

export class Inicio{
    public retornaCampoBusca(){
        return element(inicio.getCampoBusca());
    }
    public retornaBotaoMenu(){
        return element(inicio.getBtnMenu());
    }
    public retornaBotaoLogout(){
        return element(inicio.getBtnLogout());
    }
}