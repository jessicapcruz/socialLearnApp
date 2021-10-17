import axios from "axios";
import  { baseURL } from '../common/constants';

const client = axios.create({
    baseURL: baseURL 
});

const config = {
    headers: {
      'crossDomain': true,
      'Content-Type': 'application/json',
    },
}

class UserService {
    async register(data) {
        const request = { name : data.name, 'username': data.name, password: data.senha,  email: data.email, gender: data.gender };
        return await client.post("/api/user/register", request, config);
    }

    async recover(data) {
        const request = { email : data};
        return await client.post("/api/recover/password", request, config);
    }
}
  
export default new UserService();