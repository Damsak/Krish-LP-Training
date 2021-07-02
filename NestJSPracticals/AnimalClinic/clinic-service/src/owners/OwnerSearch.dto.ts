import { IsIn } from "class-validator";
import { OwnerStatus } from "./owner.enum";

//user can filter base on status and also on name
export class OwnerSearchDto {
    
    name:string
    designation: string
}