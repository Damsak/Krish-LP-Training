import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';
import { Location } from './employee/entities/location.entity';
import { Project } from './employee/entities/project.entity';
//import { ProjectModule } from './project/project.module';


@Module({
  imports: [EmployeeModule, GraphQLFederationModule.forRoot(
    {
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      buildSchemaOptions : {
        orphanedTypes:[Project,Location]
      }
    } 
      ), 
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'damsak',
      password:'root',
      database:'employee',
      entities:["dist/**/*.entity{.ts,.js}"],
      synchronize:true, 
    }), 
    //ProjectModule],
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
