import React, { useState } from 'react';
import ContentView from './ContentView';

const defaultValues = {
    name: "",
    contentAreaIds: []
};

const ContentController = () => {

    const [formValues, setFormValues] = useState(defaultValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return <ContentView onSubmit={handleSubmit}/>
}
export default ContentController;