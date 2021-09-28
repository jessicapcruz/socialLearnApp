import axios from "axios";
import { baseUrl } from './common/constants';

const client = axios.create({
    baseURL: baseUrl 
});

class AuthService {
    async authenticate(email, password) {
        return await client.post("/auth", {email: email, password: password});
    }
}
  
export default new AuthService();

