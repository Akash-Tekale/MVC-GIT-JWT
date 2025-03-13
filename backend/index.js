import Express from 'express';
import cors from 'cors';
import { DB } from './db/db.js';
import { configDotenv } from 'dotenv';
import router from './Routes/Router.js';
configDotenv();
const app = Express();
app.use(Express.json());
app.use(cors());
DB();

app.use(router);

app.listen(1300,()=>console.log("server start on 1300"));