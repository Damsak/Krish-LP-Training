import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { OwnerTierValidationPipe } from './owner-tier-validation.pipe';
import { OwnerTier } from './enums/Owner.enum';
import { OwnerCreateDto } from './dtos/OwnerCreate.dto';
import { OwnersService } from './owners.service';
import { OwnerSearchDto } from './dtos/OwnerSearch.dto';
import { OwnerUpdateDto } from './dtos/OwnerUpdate.dto';
import { Owner } from './schemas/Owner.schema';

//requests with path "/owners"
@Controller('owners')
export class OwnersController {

    //constructor injection
    constructor(private ownersService: OwnersService){
    }

    //use decorator called query to get the url parameter
    //route the traffic based on parameter
    @Get()
    @UsePipes(ValidationPipe)
    async getAllOwners(@Query() param:OwnerSearchDto): Promise<Owner[]>{
      
        if (Object.keys(param).length) {
            return this.ownersService.ownerSearch(param)
        } else {
            return this.ownersService.getAllOwners()
        }   
    }

    @Post()
    @UsePipes(ValidationPipe) //inbuilt pipe
    @UsePipes(new OwnerTierValidationPipe()) //custom pipe
    createOwner(@Body()  ownerCreateDto :OwnerCreateDto):Promise <Owner>{
    return this.ownersService.createOwner(ownerCreateDto)
    }

    // we take @param as it comes in path.
    @Get('/:id')
    getOwnerById(@Param('id') id:string) : Promise<Owner> {
        return this.ownersService.getOwnerById(id)
    }


    //id comes as a query param 
    @Put('/:id/city') 
    updateOwner(@Param('id') id:string, @Body() ownerUpdateDto:OwnerUpdateDto):Promise<Owner>{
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
