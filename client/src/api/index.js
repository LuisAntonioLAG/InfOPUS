import axios from 'axios';

const ContatosURL = 'http://localhost:5000/contatos';

export const fetchContatos = () => axios.get(ContatosURL);
