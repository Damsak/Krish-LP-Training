
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OwnerCreateDTO } from './dto/create-owner.input';
import { OwnerService } from './owner.service';
import { Owner } from './entities/owner.entity';

@Resolver(()=> Owner)
export class OwnerResolver {

    constructor(private ownerService:OwnerService) {}

    @Query(()=> [Owner],{name:"getAllOwners"})
    findAll(){
        return this.ownerService.findAll();
    }

    @Mutation(()=> Owner, {name:"createOwner"})
    create(@Args('ownerInput') owner:OwnerCreateDTO){
        return this.ownerService.create(owner)
    }

    @Query(() => Owner, { name: 'owner' })
    findOne(@Args('id') id: string) {
      return this.ownerService.findOne(id);
    }

    @Mutation(() => Owner)
    removeOwner(@Args('id') id: string) {
      return this.ownerService.remove(id);
    }


}
