import { IsNotEmpty, NotEquals } from "class-validator";
import { OwnerStatus, OwnerTier } from "../enums/Owner.enum";

export class OwnerCreateDto {
    id: string
    @IsNotEmpty() //Firstname mandatory
    firstName: string
    @IsNotEmpty()
    lastName: string
    @NotEquals('CEO')
    designation: string
    nearestCity: string
    tier:OwnerTier
    status:OwnerStatus

}