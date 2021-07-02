import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PetCreateDto } from "./PetCreate.dto";
import { PetSearchDto } from "./PetSearch.dto";
import { PetUpdateDto } from "./PetUpdate.dto";
import { Pet, PetDocument } from "./schemas/Pet.schema";
import * as mongoose from 'mongoose'

//Usd injectable decorator so that it can be injected to service
@Injectable()
export class PetRepository{

    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>){
    }

    //this will return pet as a promise
    async create (createPetDto: PetCreateDto):Promise<Pet>{

        let newPet = new this.petModel(createPetDto);
        return await newPet.save(); //return the newly created pet
    }

    async findAll():Promise<Pet[]> {
        return await this.petModel.find();
    }


    async findOne(id: string): Promise<Pet> {
        return await this.petModel.findOne({ _id: id })
    }

    async findWithFilters(filter: PetSearchDto) {
      //  let name = Object.is(filter.name, undefined) ? '' : filter.name
        let location = Object.is(filter.location, undefined) ? '' : filter.location
      //  return await this.petModel.find({ $and: [{ location: { $regex: location } }, { name: { $regex: name } }] })

        return await this.petModel.find({ $and: [{ location: { $regex: location } }] })
    }


    async update(pet: PetUpdateDto): Promise<Pet> {

        return await this.petModel.findOneAndUpdate({ _id: pet.id },
            { condition: pet.condition }, {
            new: true
        })

    }

    async delete(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)

        let ret = await this.petModel.deleteOne({ _id: objId })
        console.log(ret.n)
        return (ret.n === 1)
    }






















    // async findOne(id: string): Promise<Owner> {
    //     return await this.ownerModel.findOne({ _id: id })
    // }

    // async findWithFilters(filter: OwnerSearchDto) {
    //     let name = Object.is(filter.name, undefined) ? '' : filter.name
    //     let designation = Object.is(filter.designation, undefined) ? '' : filter.designation
    //     return await this.ownerModel.find({ $and: [{ designation: { $regex: designation } }, { firstName: { $regex: name } }] })

    // }


    // async update(owner: OwnerUpdateDto): Promise<Owner> {

    //     return await this.ownerModel.findOneAndUpdate({ _id: owner.id },
    //         { nearestCity: owner.city }, {
    //         new: true
    //     })

    // }

    // async delete(id: string): Promise<boolean> {
    //     let objId = mongoose.Types.ObjectId(id)

    //     let ret = await this.ownerModel.deleteOne({ _id: objId })
    //     console.log(ret.n)
    //     return (ret.n === 1)
    // }




}