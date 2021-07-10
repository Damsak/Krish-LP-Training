import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { OwnerModule } from 'src/owner/owner.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnerModule],
  providers: [PetResolver, PetService]
})
export class PetModule {}
