import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
//import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Directive('@key(fields:"id")')
@Entity()
export class Project {
  @Field((type)=>ID)
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Field()
  @Column()
  name: string
  @Field(() => Int) //switch to scalar type if we need a number
  @Column()
  code: number

  // @OneToMany(() => Employee, employee => employee.project)
  // @Field(()=> [Employee],{nullable:true}) //nullable true because there can be projects without employees
  // employees: Employee[] 


}
