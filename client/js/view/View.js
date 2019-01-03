export class View {
    constructor(elemento) {
        this._elemento = typeof(elemento) === 'string'? $(elemento): elemento;
    }
    
    template() {
        
        throw new Error('O método template deve ser implementado');
    }
    
    update(model) {
        this._elemento.html(this.template(model));
    }
}