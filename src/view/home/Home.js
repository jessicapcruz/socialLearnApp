import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BarraMenu from '../menu/BarraMenu';
import ImageList from './ImageList';

export class Home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <BarraMenu/>
                <img src="home.jpg" className="col-12" alt="vamos conectar conhecimento?"/>
                <div className="pt-2 ">
                    <ImageList/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
