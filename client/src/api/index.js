import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if(sessionStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchContatos = () => API.get('/contatos');
export const createContato = (newPost) => API.post('/contatos', newPost);
export const updateContato = (id, updatedPost) => API.patch(`/contatos/${id}`, updatedPost);
export const deleteContato = (id) => API.delete(`/contatos/${id}`);


export const logar = (infoUser) => API.post('/usuarios/logar', infoUser);
export const cadastrar = (infoUser) => API.post('/usuarios/cadastrar', infoUser);