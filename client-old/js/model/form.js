export class Form{
    constructor(){
        this._title = '';
        this._fieldList = [];
        this._id = '';
    }

    alterForm(title, fields, id){
        this._title = title;
        this._fieldList = [].concat(fields);
        this._id = id;
    }

    
    get title(){
        return this._title;
    }

    get fields(){
        return this._fieldList;
    }

    get id(){
        return this._id;
    }
}