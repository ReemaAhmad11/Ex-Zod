import express from 'express';
import validate from '../middilwares/validat';
import { studentSchema , StudentSchemaType,} from '../zod-schema/student_sehema';


const routerstu = express.Router();
let student : StudentSchemaType[] = [];

//Endpoints CRUD Student 

routerstu.get('/', (req, res, next) => {
  return res.status(200).json(student);
});


routerstu.post('/', validate(studentSchema), (req, res, next) => {
  const newpoststudent = req.body as StudentSchemaType;

  student.push(newpoststudent);
  return res.status(201).json({ message: 'was added !' });
});

routerstu.put('/:id',validate(studentSchema), (req, res) => {
    const updatestr = req.body as StudentSchemaType;
    const { id } = req.params;
  
    const updatedstudent = student.filter((stu) => {
      return stu.id !== id;
    });
  
    updatedstudent .push(updatestr);
  
    student = updatedstudent;
  
    return res.json({
      message: 'was updated !',
    });
  });


  routerstu.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deletestr = student.filter((stu) => {
      return stu.id !== id ;
    });
  
    student = deletestr;
    return res.json({
      message: 'was deleted !',
    });
});

routerstu.get('/major/:major', (req, res) => {
  let key = req.params.major;
  let major = key.replace("-"," ");
  let searchValue = student.filter((stu)=>{
    return stu.major.toLowerCase() === major;
  })
  return res.json(searchValue);
});


export default routerstu