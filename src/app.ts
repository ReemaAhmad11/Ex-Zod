import express from 'express';
import movieRouters from './routers/movie_route';

const app = express();

app.use(express.json());

app.use('/movie', movieRouters);

app.listen(5002);