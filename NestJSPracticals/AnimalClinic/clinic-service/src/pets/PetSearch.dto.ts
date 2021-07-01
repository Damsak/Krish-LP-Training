import { locationType, Pet } from "./pet.model";

export class PetSearchDto {
    //user can filter base on type and also on name
    location:locationType
    name:string
}