import { z, TypeOf } from 'zod';

export const bankSchema = z.object({
  body: z.object({
    id: z.string({required_error: 'Id is required'})
    .min(3, 'Id length more than 3'),

    username: z.string({required_error: 'Name is required'})
    .min(6, 'username length more than 6'),

    password: z.string().regex(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])"), 
    "Passwor must contain at least 1 upper case, lower case, numeric, and special character"),
    
    balance: z.number({required_error: 'Balance is required'})
    .gte(0, 'balance must be a positive number')

  }),
});

export type BankSchemaType = TypeOf<typeof bankSchema>['body'];