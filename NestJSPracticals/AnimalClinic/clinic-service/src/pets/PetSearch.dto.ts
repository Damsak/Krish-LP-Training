import { Pet } from "./pet.model";

export interface PetSearchDto {
    //user can filter base on type and also on name
    type:string
    name:string
}