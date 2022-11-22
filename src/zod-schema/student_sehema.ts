import { z, TypeOf } from 'zod';
export const studentSchema = z.object({
  body: z.object({
  
      id : z.string({required_error: 'Id is required'})
      .min(3, 'Id length more than 3'),

      name: z.string({required_error: 'Name is required'})
      .min(3, 'Name length more than 3'),

      major: z.enum(['It', 'Is', 'Cs', 'Swe'], {required_error: 'Major is required'}),

      level: z.number({required_error: 'Level is required'})
      .min(1).max(8),

      gpa: z.number({required_error: 'GPA is required'})
      .min(0).max(5),
  })
  })


export type StudentSchemaType = TypeOf<typeof studentSchema>['body'];