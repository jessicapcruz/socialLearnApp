import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
            <FormControlLabel
                    control={
                    <Checkbox
                        name="angular"
                        color="primary"
                    />
                    }
                    label="Angular"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="html"
                        color="primary"
                    />
                    }
                    label="HTML e CSS"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="react"
                        color="primary"
                    />
                    }
                    label="React"
                    />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs>
            <FormControlLabel
                    control={
                    <Checkbox
                        name="javaScript"
                        color="primary"
                    />
                    }
                    label="JavaScript"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="jQuery"
                        color="primary"
                    />
                    }
                    label="jQuery"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="logica"
                        color="primary"
                    />
                    }
                    label="Lógica de programação"
                    />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
            <FormControlLabel
                    control={
                    <Checkbox
                        name="python"
                        color="primary"
                    />
                    }
                    label="Python"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="node"
                        color="primary"
                    />
                    }
                    label="Node.JS"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="react"
                        color="primary"
                    />
                    }
                    label="React"
                    />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
            <FormControlLabel
                    control={
                    <Checkbox
                        name="php"
                        color="primary"
                    />
                    }
                    label="PHP"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="java"
                        color="primary"
                    />
                    }
                    label="Java"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="csharpe"
                        color="primary"
                    />
                    }
                    label="C#"
                    />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
            <FormControlLabel
                    control={
                    <Checkbox
                        name="net"
                        color="primary"
                    />
                    }
                    label=".Net"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="kotlin"
                        color="primary"
                    />
                    }
                    label="Kotlin"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="aws"
                        color="primary"
                    />
                    }
                    label="AWS"
                    />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
            <FormControlLabel
                    control={
                    <Checkbox
                        name="sql"
                        color="primary"
                    />
                    }
                    label="SQL"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="mongo"
                        color="primary"
                    />
                    }
                    label="MongoDB"
                    />
        </Grid>
        <Grid item xs>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="internet"
                        color="primary"
                    />
                    }
                    label="Internet das coisas"
                    />
        </Grid>
      </Grid>
    </div>
  );
}
