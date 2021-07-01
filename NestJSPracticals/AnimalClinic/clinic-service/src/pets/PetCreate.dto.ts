import { IsNotEmpty, NotEquals } from "class-validator";
import { locationType } from "./pet.model";

export class PetCreateDto {
    id: string
    @IsNotEmpty() //Firstname mandatory
    name: string
    type: string
    @IsNotEmpty()
    condition:string
    age: number
    location: locationType
}