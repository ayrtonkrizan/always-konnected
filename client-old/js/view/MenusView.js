import {View} from './View.js'
export class MenusView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model) {
        console.log(model.menus);
        let html = `
        <ul id="menus-display" class="navbar-nav mr-auto">
            ${model.menus.filter(e =>e.type == 'left').map(menu => `<li class="nav-item active"><a class="nav-link" id='${menu.id}' href="#">${menu.name}</a></li>`).join('')}
        </ul>
        ${model.menus.filter(e =>e.type == 'right').map(menu => `<a class="btn btn-outline-success my-2 my-sm-0" id='${menu.id}' href="${menu.id}.html">${menu.name}</a>`).join('')}
        `;
        return html;
    }
}