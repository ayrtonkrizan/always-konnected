import {Menus} from '../model/menu.js';

import {MenusView} from '../view/MenusView.js';

import {MainService} from '../services/MainService.js';
import {ProxyFactory} from '../services/ProxyFactory.js';

class MainController{
    constructor(){
        this._menusDisplay = '#menus-display';

        this._menusView = new MenusView(this._menusDisplay);
        this._menus = ProxyFactory.create(
            new Menus(),
            ['addMenu'],
            (model) => this._menusView.update(model)
        );

        this._service = new MainService();

        this._init();
    }

    _init(){
        this._service
            .getMenus()
            .map(m => this._menus.addMenu(m));

    }
}

let mainController = new MainController();

export function currentInstance() {

    return mainController;

}