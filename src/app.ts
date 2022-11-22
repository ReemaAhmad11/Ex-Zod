import express from 'express';
import movieRouters from './routers/movie_route';
import studetRouters from './routers/student_route';
import bankRouters from './routers/bank_route';

const app = express();

app.use(express.json());

app.use('/movie', movieRouters);
app.use('/student', studetRouters);
app.use('/bank', bankRouters);

app.listen(5002);