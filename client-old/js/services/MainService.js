
export class MainService{
    getMenus(){
        let menus = [
            {id: 'sign-in', type: 'right', name: 'Sign In', isPrivate: false},
            {id: 'sign-up', type: 'right', name: 'Sign Up', isPrivate: false},
            {id: 'master-data-item', type: 'left', name: 'Cadastro de Item', isPrivate: false},
            {id: 'master-data-bp', type: 'left', name: 'Cadastro de PN', isPrivate: false}
        ];
        
        return menus;
    }
}