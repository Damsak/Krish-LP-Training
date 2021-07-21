import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ProjectModule } from './project/project.module';


@Module({
  imports: [ GraphQLFederationModule.forRoot(
    {autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),} 
  ), 
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'damsak',
      password:'root',
      database:'project-fed-db',
      entities:["dist/**/*.entity{.ts,.js}"],
      synchronize:true, 
    }), 
    ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
