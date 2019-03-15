import React, { Component } from 'react';
import AKForm, { TabCollapse, CustomInput } from '../components/AKForm';
import Datatable from '../components/Datatable';
//import Iconcard from './Iconcard';
//import {Link} from 'react-router';

export default class ItemMaster extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <AKForm title="Cadastro de Item" >
                    <CustomInput id="ItemCode" label="Código" placeholder="Preencha o Código" type="text" />
                    <CustomInput id="ItemName" label="Descrição" placeholder="Preencha a Descrição" type="text" />
                    
                    <TabCollapse key='geral' title='Geral'>
                        <CustomInput id="exampleInputEmail1" label="Email" placeholder="Preencha o Email" type="email" extraInfo="We'll never share your email with anyone else."/>
                    </TabCollapse>

                    <Datatable></Datatable>
                </AKForm>
            </div>
        )
    }
}