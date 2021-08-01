import axios from 'axios';

const contatosURL = 'http://localhost:5000/contatos';

export const fetchPosts = () => axios.get(contatosURL);
export const createPost = (newPost) => axios.post(contatosURL, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${contatosURL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${contatosURL}/${id}`);