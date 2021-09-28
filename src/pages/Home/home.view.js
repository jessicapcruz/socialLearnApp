import React from 'react';
import AdvancedImageList from '../../components/AdvancedImageList/AdvancedImageList';

function HomeView(props) {
    return (
        <div>
            <img src="home.jpg" className="col-12" alt="vamos conectar conhecimento?"/>
            <div className="pt-2 ">
                <AdvancedImageList/>
            </div>
        </div>
    );
}
export default HomeView;