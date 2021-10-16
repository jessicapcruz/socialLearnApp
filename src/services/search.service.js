import axios from "axios";
import  { baseURL } from '../common/constants';

const client = axios.create({
    baseURL: baseURL 
});

const config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
      'crossDomain': true,
      'Content-Type': 'application/json',
    },
  }

class SearchService {

    async search(data) {

        const request = { data : data};
        return await client.get("api/learningContents",  config);
    }
}
  
export default new SearchService();