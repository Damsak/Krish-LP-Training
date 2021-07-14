import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { OwnerStatus, OwnerTier } from "../enums/Owner.enum";


//this is the nest JS way (nestJS WRAPPER)
export type OwnerDocument = Owner & Document;
//now i can use in typescript nature


//IMPORTANT - THIS WILL ADD "S" make the collection as Owners
@Schema()
export class Owner{

    //this Prop() automatically creates the properties for us
    //with Prop() we can also set other properties like required
    @Prop()
    id: string
    @Prop()
    firstName: string
    @Prop()
    lastName: string
    @Prop()
    designation: string
    @Prop()
    nearestCity: string
    @Prop()
    tier:OwnerTier
    @Prop()
    status:OwnerStatus
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);