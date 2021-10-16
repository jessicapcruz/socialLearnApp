import Typography from '@material-ui/core/Typography';
import React from 'react';
import SearchResult from './../../components/SearchResult/SearchResult';

function BuscaView() {
    return (
        <div>
            <Typography className="mt-3" component="h1" variant="h6">
                Resultado da sua busca
            </Typography>
            <SearchResult />
        </div>
    );
}

export default BuscaView;
