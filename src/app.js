import express from 'express';
import cors from 'cors';

import userController from './controller/userController.js';
import produtoController from './controller/produtoController.js';


const servidor = express();
servidor.use(cors());
servidor.use(cors());

servidor.use(userController)
servidor.use(produtoController);

let port = process.env.PORT;
servidor.listen(port, () => console.log('subiu'));