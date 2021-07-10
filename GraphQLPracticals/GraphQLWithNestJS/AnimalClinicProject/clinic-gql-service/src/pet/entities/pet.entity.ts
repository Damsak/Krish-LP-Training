import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Pet {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id:string
  @Field()
  @Column()
  name:string
  @Field()
  @Column()
  type:string
  @Field()
  @Column()
  condition:string
  @Field(()=>Int) //switch to scalar type as number is not a GraphQL type
  @Column()
  age:number
  @Field()
  @Column()
  location:string

  //as one owner may have many pets
  @ManyToOne(()=> Owner, owner => owner.pets)
  @Field(()=>Owner)
  owner: Owner

  @Column()
  @Field()
  ownerId: string


}
