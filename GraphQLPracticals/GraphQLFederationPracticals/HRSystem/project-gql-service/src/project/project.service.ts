import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';

@Injectable()
export class ProjectService {


  constructor(@InjectRepository(Project) private projectRepository:Repository<Project>){}
  

  create(project: CreateProjectInput): Promise<Project>  {
    
    let newProject = this.projectRepository.create(project);
    return this.projectRepository.save(newProject);
  }

  async findAll() : Promise<Project[]>  {
    return this.projectRepository.find();
  }

  async findOne(id: string): Promise<Project>  {
    return this.projectRepository.findOne(id);
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    let project:Project = this.projectRepository.create(updateProjectInput)
    project.id = id;
    return this.projectRepository.save(project)
  }

  remove(id: string) {
    return `This action removes a #${id} project`;
  }
}
