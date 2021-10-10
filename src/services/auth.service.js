import axios from "axios";
import  { baseURL } from './common/constants';

const client = axios.create({
    baseURL: baseURL 
});

class AuthService {
    async authenticate(username, password) {
        return await client.post("/api/auth/signin", {username: username, password: password});
    }
}
  
export default new AuthService();