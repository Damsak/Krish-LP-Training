import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Location } from "./entities/location.entity";
import { EmployeeService } from "./employee.service";
import { Employee } from "./entities/employee.entity";

@Resolver((of) => Location)
export class LocationResolver { 

    constructor(private readonly employeeService: EmployeeService) { }

    @ResolveField((of) => [Employee])

    employees(@Parent() project: Location): Promise<Employee[]> {
        return this.employeeService.forLocation(project.id);
    }
}