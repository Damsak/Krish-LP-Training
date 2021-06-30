import { Module } from '@nestjs/common';
import { OwnersModule } from './owners/owners.module';
import { PetsModule } from './pets/pets.module'

@Module({
  imports: [OwnersModule,PetsModule],

})
export class AppModule {}
