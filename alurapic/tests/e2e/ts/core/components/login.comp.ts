import { PaginaLogin } from "../page-objects/login.po";
import { element } from "protractor";

let login = new PaginaLogin();

export class LoginComp {
    public fazerLogin(usuario: string, senha: string){
        element(login.getCampoLogin()).sendKeys(usuario);
        element(login.getCampoSenha()).sendKeys(senha);
        element(login.getBtnLogin()).click();
    }
    public retornaBotaoHome(){
        return element(login.getBtnHome());
    }
}