import { OwnerStatus } from "./owner.model";

export interface OwnerSearchDto {
    //user can filter base on status and also on name
    status:OwnerStatus
    name:string
}