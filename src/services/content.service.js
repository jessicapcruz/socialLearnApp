import axios from 'axios';
import { baseURL } from '../common/constants';

const client = axios.create({
    baseURL: baseURL,
});

const config = () => ({
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        crossDomain: true,
        'Content-Type': 'application/json',
    },
});

class ContentService {
    async getOne() {
        return await client.get(`/api/learningContents`, config());
    }
    async getAll() {
        console.log('token', localStorage.getItem('token'));

        return await client.get(`/api/learningContents/all/itens`, config());
    }
    async register(request) {
        return await client.post(
            `/api/learningContents/register`,
            request,
            config()
        );
    }
    async update(id, request) {
        return await client.put(
            `/api/learningContents/update/${id}`,
            request,
            config()
        );
    }
    async delete(id) {
        return await client.delete(
            `/api/learningContents/delete/${id}`,
            config()
        );
    }
}
export default new ContentService();
