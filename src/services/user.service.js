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

    async recover(data) {
        const request = { email : data};
        return await client.post("/api/recover/password", request);
    }
}
  
export default new UserService();