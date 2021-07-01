import { IsIn } from "class-validator";
import { OwnerStatus } from "./owner.model";

//user can filter base on status and also on name
export class OwnerSearchDto {
    
    @IsIn(Object.values(OwnerStatus))
    status:OwnerStatus
    name:string
}