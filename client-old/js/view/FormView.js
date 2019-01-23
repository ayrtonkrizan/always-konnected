import {View} from './View.js'
export class FormView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model) {
        let html = `
            <form id=${mode.id}>
                ${model.fields.map(field => `<input id='${field.id}'>${field.placeHolder}>`).join('')}
                <button class='btn btn-primary'>Inserir</button>
            </form>
        `;
        return html;
    }
}