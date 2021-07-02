import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { OwnerTier } from './owner.enum';
import { validate } from 'class-validator';

@Injectable()
export class OwnerTierValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    
    if(!(value.tier in OwnerTier)){
      throw new BadRequestException(`${value.tier} is not a value`)
    }
    return value; 
  }
}
