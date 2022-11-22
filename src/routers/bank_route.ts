import express from 'express';
import validate from '../middilwares/validat';
import {bankSchema , BankSchemaType,} from '../zod-schema/bank_sehema';


const routerbank = express.Router();
let bank : BankSchemaType[] = [];

//Endpoints CRUD Student 

routerbank.get('/', (req, res, next) => {
  return res.status(200).json(bank);
});


routerbank.post('/', validate(bankSchema), (req, res, next) => {
  const newpostpank = req.body as BankSchemaType;

  bank.push(newpostpank);
  return res.status(201).json({ message: 'was added !' });
});

routerbank.put('/:id',validate(bankSchema), (req, res) => {
    const updateban = req.body as BankSchemaType;
    const { id } = req.params;
  
    const updatedbank = bank.filter((ban) => {
      return ban.id !== id;
    });
  
    updatedbank.push(updateban);
  
    bank = updatedbank;
  
    return res.json({
      message: 'was updated !',
    });
  });


  routerbank.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deleteban = bank.filter((ban) => {
      return ban.id !== id ;
    });
  
    bank = deleteban;
    return res.json({
      message: 'was deleted !',
    });

  });

export default routerbank