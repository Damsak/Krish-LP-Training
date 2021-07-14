import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PetCreateDto } from "./dtos/PetCreate.dto";
import { PetSearchDto } from "./dtos/PetSearch.dto";
import { PetUpdateDto } from "./dtos/PetUpdate.dto";
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
        let location = Object.is(filter.location, undefined) ? '' : filter.location
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
}