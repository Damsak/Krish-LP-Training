import { ValidationPipe } from '@nestjs/common';
import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes } from '@nestjs/common';
import { PetLocationValidationPipe } from './pet-location-validation.pipe';
import { Pet } from './pet.model';
import { PetCreateDto } from './PetCreate.dto';
import { PetsService } from './pets.service';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';

//requests with path "/pets"
@Controller('pets')
export class PetsController {

    //constructor injection
    constructor(private petsService: PetsService){

    }

    //use decorator called query to get the url parameter
    //route the traffic based on parameter
    @Get()
    getAllPets(@Query() param:PetSearchDto){
      
        //if the object has any length go to filter. else go to no filter
        if(Object.keys(param).length) {

            return this.petsService.petSearch(param)
        } else {
            console.log('No filter')

            return this.petsService.getAllPets();
        }
        
    }

    
    // @Post()
    // createOwner(@Body('name') name: string,
    // @Body('type') type: string,
    // @Body('condition') condition: string ){

    // return this.petsService.createPet(name,type,condition)

    // }


    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new PetLocationValidationPipe()) 
    createPet(@Body()  petCreateDto : PetCreateDto){
    return this.petsService.createPet(petCreateDto)
    }


    //we take @param as it comes in path.
    @Get('/:id')
    getPetById(@Param('id') id:string) {
        return this.petsService.getPetById(id)
    }


    //id comes as a query param 
    @Put('/:id/condition') 
    updatePet(@Param('id') id:string, @Body() petUpdateDto:PetUpdateDto){
        petUpdateDto.id = id;
        return this.petsService.updatePet(petUpdateDto)
    }


    @Delete('/:id')
    @HttpCode(204) //over ride the http code
    deletePet(@Param('id') id:string) {

        //if didnt return the boolean
        if(!this.petsService.deletePet(id)){
            throw new NotFoundException('Pet Does not exist')
        }
    } 


}
