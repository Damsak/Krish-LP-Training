import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { locationType } from './pet.model';

@Injectable()
export class PetLocationValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

  if(!(value.location in locationType)){
    throw new BadRequestException(`${value.location} is not a value`)
  }
  return value; 
  }
}
