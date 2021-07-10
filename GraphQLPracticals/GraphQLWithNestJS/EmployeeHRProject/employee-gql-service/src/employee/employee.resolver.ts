
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(()=> Employee)
export class EmployeeResolver {

    constructor(private employeeService:EmployeeService) {}

    @Query(()=> [Employee],{name:"getAllEmployees"})
    findAll(){
        return this.employeeService.findAll();
    }

    @Mutation(()=> Employee, {name:"createEmployee"})
    create(@Args('employeeInput') employee:EmployeeCreateDTO){
        return this.employeeService.create(employee)
    }

    @Query(()=> Employee)
    findOne(@Args("id") id: string){
        return this.employeeService.findOne(id);
    }

    @ResolveField(()=> Project)
    //resolve this from parent and get ProjectId
    project(@Parent() employee:Employee) {
        return this.employeeService.getProject(employee.projectId)
    }
}
