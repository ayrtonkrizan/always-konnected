class Menu {
    constructor(id, name, isPrivate){
        this._id = id;
        this._name = name;
        this._isPrivate = Boolean(JSON.parse(isPrivate));
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
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
        this._menuList = this._menuList.concat(new Menu(menu.id, menu.name, menu.isPrivate));
    }

    
    get menus(){
        return this._menuList.filter(m=> m.isPrivate == this._logado)
    }

    set logado(value){
        this._logado = value;
    }
}