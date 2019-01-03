
export class MainService{
    getMenus(){
        let menus = [
            {id: 'sign-in', name: 'Sign In', isPrivate: false},
            {id: 'sign-up', name: 'Sign Up', isPrivate: false},
            {id: 'master-data-item', name: 'Cadastro de Item', isPrivate: true},
            {id: 'master-data-bp', name: 'Cadastro de PN', isPrivate: true}
        ];
        
        return menus;
    }
}