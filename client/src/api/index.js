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
export const updateUsuario = (id, updatedUsuario) => API.patch(`/usuarios/${id}`, updatedUsuario);
export const mudarTema = (id, updatedTema) => API.patch(`/usuarios/${id}/tema`, updatedTema);


export const fetchCartoes = () => API.get('/cartoes');
export const createCartao = (newCartao) => API.post('/cartoes', newCartao);
export const updateCartao = (id, updatedCartao) => API.patch(`/cartoes/${id}`, updatedCartao);
export const deleteCartao = (id) => API.delete(`/cartoes/${id}`);
