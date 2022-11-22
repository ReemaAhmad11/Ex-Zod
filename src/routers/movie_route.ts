import express from 'express';
import validate from '../middilwares/validat';
import { movieSchema , MovieSchemaType,} from '../zod-schema/movie_sehema';

const router = express.Router();
let movie : MovieSchemaType[] = [];


//Endpoints CRUD Movie 

router.get('/', (req, res, next) => {
  return res.status(200).json(movie);
});


router.post('/', validate(movieSchema), (req, res, next) => {
  const newpostmovie = req.body as MovieSchemaType;

  movie.push(newpostmovie);
  return res.status(201).json({ message: 'was added !' });
});

router.put('/:id',validate(movieSchema), (req, res) => {
    const updatemov = req.body as MovieSchemaType;
    const { id } = req.params;
  
    const updatedmovie = movie.filter((mov) => {
      // return mov.id !== id;
    });
  
    updatedmovie .push(updatemov);
  
    movie = updatedmovie;
  
    return res.json({
      message: 'was updated !',
    });
  });


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deletemov = movie.filter((mov) => {
      return mov.id !== id ;
    });
  
    movie = deletemov;
    return res.json({
      message: 'was deleted !',
    });
});


router.get('/name/:name', (req, res) => {
  let key = req.params.name;
  let name = key.replace("-"," ");
  let searchValue = movie.filter((mov)=>{
    return mov.name.toLowerCase() === name;
  })
  return res.json(searchValue);
});

router.get('/genre/:genre', (req, res) => {
  let key = req.params.genre;
  let genre = key.replace("-"," ");
  let searchValue = movie.filter((mov)=>{
    return mov.genre.toLowerCase() === genre;
  })
  return res.json(searchValue);
});

export default router