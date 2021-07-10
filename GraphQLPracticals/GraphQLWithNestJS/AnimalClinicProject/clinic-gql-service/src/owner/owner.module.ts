import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Owner])],
  providers: [OwnerService, OwnerResolver],
  exports:[OwnerService]
})
export class OwnerModule {}
