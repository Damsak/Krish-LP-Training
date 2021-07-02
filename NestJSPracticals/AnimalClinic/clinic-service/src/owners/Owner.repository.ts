import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
//import { create } from "domain";
import { Model } from "mongoose";
import { OwnerCreateDto } from "./OwnerCreate.dto";
import { OwnerSearchDto } from "./OwnerSearch.dto";
import { OwnerUpdateDto } from "./OwnerUpdate.dto";
import { Owner, OwnerDocument } from "./schemas/Owner.schema";
import * as mongoose from 'mongoose'

//Usd injectable decorator so that it can be injected to service
@Injectable()
export class OwnerRepository{

    constructor(@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>){
    }

    //this will return owner as a promise
    async create (createOwnerDto: OwnerCreateDto):Promise<Owner>{

        let newOwner = new this.ownerModel(createOwnerDto);
        return await newOwner.save(); //return the newly created owner
    }

    async findAll():Promise<Owner[]> {
        return await this.ownerModel.find();
    }

    async findOne(id: string): Promise<Owner> {
        return await this.ownerModel.findOne({ _id: id })
    }

    async findWithFilters(filter: OwnerSearchDto) {
        let name = Object.is(filter.name, undefined) ? '' : filter.name
        let designation = Object.is(filter.designation, undefined) ? '' : filter.designation
        return await this.ownerModel.find({ $and: [{ designation: { $regex: designation } }, { firstName: { $regex: name } }] })
    }

    async update(owner: OwnerUpdateDto): Promise<Owner> {

        return await this.ownerModel.findOneAndUpdate({ _id: owner.id },
            { nearestCity: owner.city }, {
            new: true
        })
    }

    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)

        let ret = await this.ownerModel.deleteOne({ _id: objId })
        console.log(ret.n)
        return (ret.n === 1)
    }
}