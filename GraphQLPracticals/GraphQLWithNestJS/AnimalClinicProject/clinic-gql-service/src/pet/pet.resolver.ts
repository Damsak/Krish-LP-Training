import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { threadId } from 'worker_threads';
import { Owner } from 'src/owner/entities/owner.entity';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private readonly petService: PetService) {}

  @Mutation(() => Pet)
  createPet(@Args('pet') pet: CreatePetInput) {
    return this.petService.create(pet);
  }

  @Query(() => [Pet], { name: 'getAllPets' })
  findAll() {
    return this.petService.findAll();
  }

  //@Query(() => Pet, { name: 'pet' })
  @Query(() => Pet)
  findOne(@Args('id') id: string) {
    return this.petService.findOne(id);
  }

  @Mutation(() => Pet)
  updatePet(@Args('pet') pet: UpdatePetInput) {
    return this.petService.update(pet.id, pet);
  }

  @Mutation(() => Pet)
  removePet(@Args('id') id: string) {
    return this.petService.remove(id);
  }

  @ResolveField(()=> Owner)
  //resolve from parent because we need to get Pet's ownerID field
  owner(@Parent() pet:Pet) {
    return this.petService.getOwner(pet.ownerId)
  }
}
