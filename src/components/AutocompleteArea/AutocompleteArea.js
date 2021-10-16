import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';

export default function AutocompleteArea({
    id,
    name,
    options,
    setFieldValue,
    handleInputChange,
}) {
    const textFieldId = `contentAreaIds`;
    return (
        <Autocomplete
            multiple
            id={id}
            name={name}
            label="Área"
            options={options}
            getOptionLabel={(option) => option.name}
            onChange={(e, value) => {
                setFieldValue(textFieldId, value);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    name={textFieldId}
                    onChange={handleInputChange}
                    label="Areas do Conteúdo"
                    placeholder="Área"
                />
            )}
            onInputChange={handleInputChange}
        />
    );
}
