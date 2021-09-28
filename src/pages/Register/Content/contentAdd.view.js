import React, { Fragment } from 'react';
import  { Paper, Box, Grid, TextField, Typography, Button} from '@material-ui/core';
import AutoCompleteArea from '../../../components/AutocompleteArea/AutocompleteArea'

const ContentAddView = (props) => {
    return (
        <Fragment>
            <Paper>
                <Box px={3} py={2}>
                    <Typography variant="h6" align="center" margin="dense">
                        Cadasto de Conteúdo
                    </Typography>
                    <form onSubmit={() => props.onSubmit()}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                            <AutoCompleteArea handleInputChange={props.handleContentAreas}/>
                            <Typography variant="inherit" color="textSecondary">
                                {/* {errors.fullname?.message} */}
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField  id="name"name="name" label="Nome"
                                        fullWidth margin="dense" required
                                        onChange={props.handleName}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {/* {errors.username?.message} */}
                            </Typography>
                            </Grid>
                        </Grid>
                        <Box mt={3}>
                            <Button variant="contained" color="primary" >
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </Fragment>
    );
}

export default ContentAddView;