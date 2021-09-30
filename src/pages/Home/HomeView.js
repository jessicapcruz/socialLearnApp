import React from 'react';
import MenuBar from './../../components/Menu/MenuBar';
import AdvancedImageList from './../../components/AdvancedImageList/AdvancedImageList';

function HomeView(props) {
    return (
        <div>
            <MenuBar/>
            <img src="home.jpg" className="col-12" alt="vamos conectar conhecimento?"/>
            <div className="pt-2 ">
                <AdvancedImageList/>
            </div>
        </div>
    );
}
export default HomeView;