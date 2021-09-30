import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import BarraMenu from '../menu/BarraMenu';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
              <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="conect.jpg"
        alt="Conectar conhecimento"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Curso 1
        </Typography>
        <Typography variant="h5" component="div">
          Resumo curso 1
        </Typography>
        <Typography variant="body2">
          descrição
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ler mais</Button>
      </CardActions>
    </React.Fragment>
  );
  
export class Busca extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div className="text-start">
                    <BarraMenu/>
                    <Typography className="mt-3" component="h1" variant="h6">
                        Resultado da sua busca
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

export default connect(mapStateToProps, mapDispatchToProps)(Busca)
