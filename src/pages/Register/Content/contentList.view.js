/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import areaContents from '../../../components/AutocompleteArea/areaContentsData';
import {
    deleteContent,
    getallContent,
} from '../../../redux/slices/content.slice';
import { notify } from './../../../common/util';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    pageHeader: {
        display: 'flex',
        flexDirection: 'row',
        margin: theme.spacing(1),
        justifyContent: 'space-evenly',
    },
    title: {
        color: '#0000a8',
        fontWeight: 'bold',
    },
}));

function GridItem({ classes, id, name, contentAreas, handleRemove }) {
    const joinedContents = [...contentAreas].map((item) =>
        areaContents.filter((area) => area.id === item.id)
    );
    const contents = joinedContents.map((item) => item[0]);
    const stringContents = contents.map((item) => item.title).join(' ');

    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{ bgcolor: generateRandomColor() }}
                            aria-label="recipe"
                        >
                            {name.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title={name.toUpperCase()}
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {stringContents}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name.toUpperCase()}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {/* <IconButton aria-label="editar...">
                     <EditIcon />
                    </IconButton> */}
                    <IconButton
                        aria-label="excluir"
                        color="error"
                        onClick={() => handleRemove(id)}
                    >
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
    const dispatch = useDispatch();
    const [contents, setContents] = React.useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteContent({ id }))
            .unwrap()
            .then(() => {
                notify('Item excluído com sucesso', 'success');
                loadItems();
            })
            .catch((e) => {
                console.log(e);
                notify('Erro ao deletar', 'error');
            });
    };

    const loadItems = () => {
        dispatch(getallContent())
            .unwrap()
            .then((data) => {
                console.log('contents is', data);
                setContents(data);
            })
            .catch((e) => {
                console.log(e);
                notify('Erro ao carregar', 'error');
            });
    };

    return (
        <div className="p-2">
            <ToastContainer />
            <Grid container spacing={2}>
                <Grid item xs={11}>
                    <Typography variant="h5" className={classes.title}>
                        Conteúdos
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            history.push('/content-edit');
                        }}
                    >
                        Adicionar
                    </Button>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={1}>
                {contents.map((item) => (
                    <GridItem
                        key={item.id}
                        id={item.id}
                        classes={classes.paper}
                        name={item.name}
                        contentAreas={item.contentAreas}
                        handleRemove={handleDelete}
                    />
                ))}
            </Grid>
        </div>
    );
};
export default ContentListView;
