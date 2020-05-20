import { by } from "protractor";

export class InicioPO{
    private campoBusca = by.className('rounded');
    private btnMenu = by.className('navbar-brand');
    private btnLogout = by.css('div > a:nth-of-type(2)');

    public getCampoBusca(){
        return this.campoBusca;
    }
    public getBtnMenu(){
        return this.btnMenu;
    }
    public getBtnLogout(){
        return this.btnLogout;
    }
}