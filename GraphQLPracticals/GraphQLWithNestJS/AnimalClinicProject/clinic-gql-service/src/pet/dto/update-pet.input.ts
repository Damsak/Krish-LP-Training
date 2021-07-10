import { CreatePetInput } from './create-pet.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePetInput {
  
  @Field()
  id:string
  @Field()
  name:string
  @Field()
  type:string
  @Field()
  condition:string
  @Field(()=>Int) //switch to scalar type as number is not a GraphQL type
  age:number
  @Field()
  location:string
}
