import axios from 'axios';

const contatosURL = 'http://localhost:5000/contatos';

export const fetchContatos = () => axios.get(contatosURL);
export const createContato = (newPost) => axios.post(contatosURL, newPost);
export const updateContato = (id, updatedPost) => axios.patch(`${contatosURL}/${id}`, updatedPost);
export const deleteContato = (id) => axios.delete(`${contatosURL}/${id}`);