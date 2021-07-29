import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


import contatosRoutes from './routes/contatos.js'


const app = express();

app.use(cors());
app.use('/contatos', contatosRoutes)
app.use(express.json({limit: '30mb', extended: true }));
app.use(express.urlencoded({limit: '30mb', extended: true }));


const CONNECTION_URL = 'mongodb+srv://LuisAntonioLAG:hnn023200@cluster0.bkpko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
  
  mongoose.set('useFindAndModify', false);

