import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

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
export default card;