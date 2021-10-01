import React from 'react';
import MenuBar from './../../components/Menu/MenuBar';
import Cadastro from './../../components/Tab/Cadastro';

function RegisterView(props) {
    return (
        <div>
            <MenuBar/>
            <div className="pt-2 ">
                <Cadastro/>
            </div>
        </div>
    );
}
export default RegisterView;