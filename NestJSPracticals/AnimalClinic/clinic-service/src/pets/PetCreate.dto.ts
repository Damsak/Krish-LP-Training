import { IsNotEmpty, NotEquals } from "class-validator";
import { locationType } from "./Pet.enum";

export class PetCreateDto {
    id: string
    @IsNotEmpty() 
    name: string
    type: string
    @IsNotEmpty()
    condition:string
    age: number
    location: locationType
}