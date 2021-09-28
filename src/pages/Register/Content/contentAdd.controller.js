//import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector, useHistory } from "react-router-dom";
import { useState } from "react";
//import { contentAdded } from "../../../redux/slices/content.slice";
import ContentAddView from './contentAdd.view';

const ContentAddController = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [contentAreas, setcontentAreas] = useState([]);
    // const [error, setError] = useState(null);

    // const contentsAmount = useSelector((state) => state.contents.length);
  
    const handleName = (e) => setName(e.target.value);
    const handleContentAreas = (e) => setcontentAreas(e.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formValues);
    };

    return <ContentAddView/>
}
export default ContentAddController;