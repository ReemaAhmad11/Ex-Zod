import { z, TypeOf } from 'zod';

//Movie : ID, name , genre , rating , duration

export const movieSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'Id is required !' }),

    name: z.string({ required_error: 'Name is required !' })
    .min(4, 'you name must be more than 3 characters'),
    
    genre : z.enum(['Drama', 'Action', 'Comedy'], { required_error: 'Type is required , value must be one of this Drama or Action or Comedy !' }),

    rating :z.number({ required_error: 'Number must be between 1 - 5 !' })
    .min(1,'min numbert 1').max(5, 'max number 5'),
    
    duration :z.number({ required_error: 'Duration must be more than 60!' })
    .min(60)
  }),
});

export type MovieSchemaType = TypeOf<typeof movieSchema>['body'];
