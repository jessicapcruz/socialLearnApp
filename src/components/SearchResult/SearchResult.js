import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SearchResult extends Component {
    render() {
        const data = localStorage.getItem('search_list')
        if (data.size !== undefined) {
            return (
                <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                    {data.map(todo => (
                        <ListItem alignItems="flex-start">
                            <ListItemText
                            primary={todo.name}
                        />
                        </ListItem> 
                     ))}
                    
                </List>
              );
        } else {
            return (
                <div> Conteudo não encontrado</div>
            )
        }

    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
