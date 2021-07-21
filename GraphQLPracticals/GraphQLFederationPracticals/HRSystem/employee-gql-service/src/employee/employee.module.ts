import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { ProjectResolver } from './project.resolver';
import { LocationResolver } from './location.resolver';
//import { ProjectModule } from 'src/project/project.module';

@Module({
  imports:[TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService, EmployeeResolver, ProjectResolver, LocationResolver]
})
export class EmployeeModule {}
