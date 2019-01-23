class Menu {
    constructor(id, name, isPrivate, type){
        this._id = id;
        this._name = name;
        this._isPrivate = Boolean(JSON.parse(isPrivate));
        this._type = type;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get type(){
        return this._type;
    }

    get isPrivate(){
        return this._isPrivate
    }

    get isPublic(){
        return !this._isPrivate;
    }
}

export class Menus{
    constructor(){
        this._logado = false;
        this._menuList = [];
    }

    addMenu(menu){
        this._menuList = this._menuList.concat(new Menu(menu.id, menu.name, menu.isPrivate, menu.type));
    }

    
    get menus(){
        return this._menuList.filter(m=> m.isPrivate == this._logado)
    }

    set logado(value){
        this._logado = value;
    }
}