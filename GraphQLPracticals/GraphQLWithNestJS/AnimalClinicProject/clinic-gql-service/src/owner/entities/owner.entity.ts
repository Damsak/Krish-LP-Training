import { Field, ObjectType } from "@nestjs/graphql"
import { Pet } from "src/pet/entities/pet.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Owner {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Field()
    @Column()
    firstName:string
    @Field()
    @Column()
    lastName:string
    @Field()
    @Column()
    designation:string
    @Field({nullable:true})
    @Column({nullable:true})
    nearestCity:string
    @Field()
    @Column()
    tier:string
    @Field()
    @Column()
    status:string

    @OneToMany(() => Pet, pet => pet.owner)
    @Field(()=> [Pet],{nullable:true}) //nullable true because there can be owners without pets
    pets: Pet[] 

}