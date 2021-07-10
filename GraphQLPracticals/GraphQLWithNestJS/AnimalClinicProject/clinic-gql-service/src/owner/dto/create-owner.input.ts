import { Field, InputType } from "@nestjs/graphql"

//this decorator tells graphQl that this is going to use for mutations.
@InputType()
export class OwnerCreateDTO {

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