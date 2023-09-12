import 'reflect-metadata';
import express, { Express } from 'express';
import dayjs from 'dayjs';
import cors from 'cors';
import { AppDataSource } from './database/dataSource';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware';

import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/pt-br';
import router from './router';
dayjs.extend(localizedFormat);
dayjs.locale('pt-br');

const PORT = process?.env?.PORT || 3000;

// Inicia back-end
const init = async (): Promise<void> => {
  try {
    // Inicia a conexão com o banco de dados
    await AppDataSource.initialize();

    // Inicia roteamento através do express
    const app: Express = express();
    app.use(express.json());
    app.use(cors());

    // Base para as rotas
    app.use('/api', router);

    app.use(errorHandlerMiddleware);

    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Servidor iniciado e rodando na porta ${PORT}`);
    });
  } catch (error) {
    // TODO - Melhorar log de erro
    console.error({ error });
  }
};

init();
