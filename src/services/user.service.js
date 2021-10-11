import axios from "axios";
import  { baseURL } from '../common/constants';

const client = axios.create({
    baseURL: baseURL 
});

class UserService {
    async register(data) {
        const request = { name : data.name, password: data.senha,  email: data.email, gender: data.gender };
        return await client.post("/api/user/register", request);
    }
}
  
export default new UserService();