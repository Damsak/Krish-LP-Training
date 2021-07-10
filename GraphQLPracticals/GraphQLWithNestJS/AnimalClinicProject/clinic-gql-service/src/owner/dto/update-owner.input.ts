import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOwnerInput {
  
  @Field()
  id:string
  @Field()
  firstName: string
  @Field()
  lastName: string
  @Field()
  designation: string
  @Field({ nullable: true })
  nearestCity: string
  @Field()
  tier:string
  @Field()
  status:string
}