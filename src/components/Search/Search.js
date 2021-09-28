import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';

import MenuBar from '../Menu/MenuBar';
import card from '../Card/Card';

export class Search extends Component {
    render() {
        return (
            <div>
                <div className="text-start">
                    <MenuBar/>
                    <Typography className="mt-3" component="h1" variant="h6">
                        O que você quer aprender?
                    </Typography>
                </div>
                <div className="mt-5">
                    <Box sx={{ minWidth: 275 }}>
                        <Card variant="outlined">{card}</Card>
                    </Box>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

