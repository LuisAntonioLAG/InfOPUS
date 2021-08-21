import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


import usuariosRoutes from './routes/usuarios.js'
import contatosRoutes from './routes/contatos.js';
import cartaoRoutes from './routes/cartao.js'

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))


app.use('/contatos', contatosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/cartoes', cartaoRoutes);

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);