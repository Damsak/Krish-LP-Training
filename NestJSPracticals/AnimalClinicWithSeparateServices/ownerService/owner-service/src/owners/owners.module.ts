import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerRepository } from './Owner.repository';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { Owner, OwnerSchema } from './schemas/Owner.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Owner.name, schema:OwnerSchema}])],
  controllers: [OwnersController],
  providers: [OwnersService,OwnerRepository]
})
export class OwnersModule {}
