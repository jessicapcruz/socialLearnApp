import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SearchResult extends Component {
    render() {
        const data = [
            {title: "Conteudo 1", resume: "Resumo Conteudo 1",  id:1, instructor: 'Instrutor 1'},
            {title: "Conteudo 2", resume: "Resumo Conteudo 2",  id:1, instructor: 'Instrutor 2'},
            {title: "Conteudo 3", resume: "Resumo Conteudo 3",  id:1, instructor: 'Instrutor 3'}
          ]
        return (
            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                {data.map(todo => (
                    <ListItem alignItems="flex-start">
                        <ListItemText
                        primary={todo.title}
                        secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {todo.resume}
                            </Typography>
                             -  { todo.instructor}
                        </React.Fragment>
                        }
                    />
                    </ListItem> 
                 ))}
                
            </List>
          );
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
