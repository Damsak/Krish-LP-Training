import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePetInput {

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

  @Field()
  ownerId:string
}
