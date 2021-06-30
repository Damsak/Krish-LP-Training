import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { request } from 'express';
import { Owner, OwnerTier } from './owner.model';
import { OwnersService } from './owners.service';
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';

//requests with path "/owners"
@Controller('owners')
export class OwnersController {

    //constructor injection
    constructor(private ownersService: OwnersService){

    }

    //use decorator called query to get the url parameter
    //route the traffic based on parameter
    @Get()
    getAllOwners(@Query() param:OwnerSearchDto){
      
        //if the object has any length go to filter. else go to no filter
        if(Object.keys(param).length) {
            console.log(param)
            console.log('filter')
            return this.ownersService.ownerSearch(param)
        } else {
            console.log('No filter')

            return this.ownersService.getAllOwners();
        }
        
    }

    
    @Post()
    createOwner(@Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('designation') designation: string,
    @Body('nearestCity') nearestCity: string,
    @Body('tier') tier:OwnerTier,){

    return this.ownersService.createOwner(firstName,lastName,designation,nearestCity,tier)

    }

    //Another way to create Owner
    // @Post()
    // createOwner2(@Body() request){

    // return this.ownersService.createOwner(request.firstName,request.lastName,request.designation,request.nearestCity,request.tier)

    // }


    //we take @param as it comes in path.
    @Get('/:id')
    getOwnerById(@Param('id') id:string) {
        return this.ownersService.getOwnerById(id)
    }


    //id comes as a query param 
    @Put('/:id/city') 
    updateOwner(@Param('id') id:string, @Body() ownerUpdateDto:OwnerUpdateDto){
        ownerUpdateDto.id = id;
        return this.ownersService.updateOwner(ownerUpdateDto)
    }


    @Delete('/:id')
    @HttpCode(204) //over ride the http code
    deleteOwner(@Param('id') id:string) {

        //if didnt return the boolean
        if(!this.ownersService.deleteOwner(id)){
            throw new NotFoundException('Owner Does not exist')
        }
    } 


}
