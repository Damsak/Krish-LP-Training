import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { locationType } from "../enums/Pet.enum";

//this is the nest JS way (nestJS WRAPPER)
export type PetDocument = Pet & Document;
//now i can use in typescript nature

//IMPORTANT - THIS WILL ADD "S" make the collection as Owners
@Schema()
export class Pet{

    //this Prop() automatically creates the properties for us
    @Prop()
    id: String
    @Prop()
    name: String
    @Prop()
    type: String
    @Prop()
    condition: String
    @Prop()
    age: number
    @Prop()
    location:locationType

}

export const PetSchema = SchemaFactory.createForClass(Pet);