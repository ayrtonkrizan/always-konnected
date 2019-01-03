import {View} from './View.js'
export class MenusView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model) {
        let html = model.menus.map(menu => `<li><a id='${menu.id}' href="#">${menu.name}</a></li>`).join('');
        return html;
    }
}