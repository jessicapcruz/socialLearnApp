import axios from "axios";
import {baseURL} from 'constants';

export default axios.create({
  baseURL:  baseURL,
  headers: { 'Content-Type': 'application/json; charset=UTF-8', 'Accept': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
});





