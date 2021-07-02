import { Module } from '@nestjs/common';
import { OwnersModule } from './owners/owners.module';
import { PetsModule } from './pets/pets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';

@Module({
  imports: [OwnersModule,PetsModule,MongooseModule.forRoot(MONGO_CONNECTION)],

})
export class AppModule {}
