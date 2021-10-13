import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import PageListToolbar from './../../../components/PageListToolbar';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    pageHeader: {
        display: 'flex',
        flexDirection: 'row',
        margin: theme.spacing(1),
        justifyContent: 'space-evenly'
    },
    title: {
        color: "#0000a8",
        fontWeight: "bold"
    }
}));

function GridItem({ classes }) {
    return (
      <Grid item xs={12} sm={6} md={3}>
         <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title="React"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Programação
                </Typography>
                <Typography variant="h5" component="div">
                   React
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                    <IconButton aria-label="editar...">
                     <EditIcon />
                    </IconButton>
                    <IconButton aria-label="excluir">
                        <DeleteForeverIcon />
                    </IconButton>
            </CardActions>
        </Card>
      </Grid>
    );
 }

const ContentListView = (props) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className="p-2">
            <div className="MuiPaper-root app-page-title MuiPaper-elevation2">
                <div classes={classes.pageHeader}>
                    <div className="app-page-title--first">
                        <Typography variant="h5" className={classes.title}>Conteúdos</Typography>
                        <div className="app-page-title--heading">
                            <PageListToolbar onClick={() => history.push('/content-edit')} />                            
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <Grid container spacing={1}>
                <GridItem classes={classes.paper} />
                <GridItem classes={classes.paper} />
                <GridItem classes={classes.paper} />
                <GridItem classes={classes.paper} />
            </Grid>
        </div>
    );
}
export default ContentListView;
