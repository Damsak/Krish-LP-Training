import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Field()
  @Column()
  name: string
  @Field(() => Int) //switch to scalar type if we need a number
  @Column()
  code: number

  @OneToMany(() => Employee, employee => employee.project)
  @Field(()=> [Employee],{nullable:true}) //nullable true because there can be projects without employees
  employees: Employee[] 


}
