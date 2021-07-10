import { Field, InputType } from "@nestjs/graphql"

//this decorator tells graphQl that this is going to use for mutations.
@InputType()
export class EmployeeCreateDTO {

    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    designation: string
    @Field({ nullable: true })
    city: string

    @Field()
    projectId: string

}