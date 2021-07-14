import { locationType } from "../enums/Pet.enum";

export class PetSearchDto {
    //user can filter base on locationtype and also on name
    location:locationType
    name:string
}