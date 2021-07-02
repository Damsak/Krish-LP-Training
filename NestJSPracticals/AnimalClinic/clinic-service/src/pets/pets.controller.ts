import { ValidationPipe } from '@nestjs/common';
import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes } from '@nestjs/common';
import { PetLocationValidationPipe } from './pet-location-validation.pipe';
import { PetCreateDto } from './PetCreate.dto';
import { PetsService } from './pets.service';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';
import { Pet } from './schemas/Pet.schema';

//requests with path "/pets"
@Controller('pets')
export class PetsController {

    //constructor injection
    constructor(private petsService: PetsService){

    }

    //use decorator called query to get the url parameter
    //route the traffic based on parameter
    @Get()
    async getAllPets(@Query() param:PetSearchDto): Promise<Pet[]>{
      
        if (Object.keys(param).length) {
            return this.petsService.petSearch(param) //if uses passes the parameters in the url
         } else {
            return await this.petsService.getAllPets() //return all pets if there are no parameters in the url
        }      
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new PetLocationValidationPipe()) 
    createPet(@Body()  petCreateDto : PetCreateDto) : Promise<Pet>{
    return this.petsService.createPet(petCreateDto)
    }
    
    // we take @param as it comes in path.
    @Get('/:id')
    getPetById(@Param('id') id:string) : Promise<Pet> {
        return this.petsService.getPetById(id)
    }

   // id comes as a query param 
    @Put('/:id/condition') 
    updatePet(@Param('id') id:string, @Body() petUpdateDto:PetUpdateDto):Promise<Pet>{
        petUpdateDto.id = id;
        return this.petsService.updatePet(petUpdateDto)
    }


    @Delete('/:id')
    @HttpCode(204) //over ride the http code
    deletePet(@Param('id') id:string) {
        //if didnt return the boolean
        if(!this.petsService.deletePet(id)){
            throw new NotFoundException('Owner Does not exist')
        }
    } 


}
