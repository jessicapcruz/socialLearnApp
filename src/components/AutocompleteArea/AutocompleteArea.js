import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function AutocompleteArea(props) {
  return (
    <Autocomplete
      multiple
      id="multiple-Areas"
      options={areaContents}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="Areas do Conteúdo" placeholder="Cloud" />
      )}
      onInputChange={props.handleInputChange}
    />
  );
}

const areaContents = [
  { title: 'Artificial Intelligence', id: 1 },
  { title: 'Banco de Dados', id: 2 },
  { title: "Big Data", id: 3 },
  { title: 'Cloud', id: 4 },
  { title: 'Internet of Things', id: 5 },
  { title: 'Programação', id: 6 },
];