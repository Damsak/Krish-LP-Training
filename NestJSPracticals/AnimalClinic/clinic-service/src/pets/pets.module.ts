import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetRepository } from './Pet.repository';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { Pet, PetSchema } from './schemas/Pet.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Pet.name, schema:PetSchema}])],
  controllers: [PetsController],
  providers: [PetsService, PetRepository]
})
export class PetsModule {}
