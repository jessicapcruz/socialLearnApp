import axios from "axios";
import  { baseURL } from '../common/constants';

const client = axios.create({
    baseURL: baseURL 
});

class SearchService {

    async search(data) {
        console.log('call search')
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSsOpc3NpY2EiLCJzdWIiOiI2MTU1MTI1YmQzZWZjZDdiODM1NWNhYjciLCJlbWFpbCI6Implc3NpY2FfcF9jcnV6QGhvdG1haWwuY29tIiwiaWF0IjoxNjMzOTk3MTI2LCJleHAiOjE2MzQwODM1MjZ9.JoA6bqrreRftT0h448grVHMuvcZvoWfrLDRDkSAuq38'
        };
        const request = { data : data, headers };
        return await client.get("api/learningContents", request);
    }
}
  
export default new SearchService();