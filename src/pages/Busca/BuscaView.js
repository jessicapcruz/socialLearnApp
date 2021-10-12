import React from 'react'
import Typography from '@material-ui/core/Typography';
import MenuBar from './../../components/Menu/MenuBar';
import SearchResult from './../../components/SearchResult/SearchResult';

function BuscaView(props) {

    return (
        <div>
            <Typography className="mt-3" component="h1" variant="h6">
                Resultado da sua busca
            </Typography>
            <SearchResult/>
        </div>
    );
}


export default BuscaView;