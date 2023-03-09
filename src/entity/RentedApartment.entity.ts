import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RentedApartment {
  @PrimaryGeneratedColumn("uuid")
    id: string

  @Column({
    nullable: false
  })
    title: string

  @Column({
    nullable: false
  })
    description: string

  @Column()
    preview: string

  @Column()
    address: string

  @Column({
    nullable: false
  })
    price: string
    
  @Column()
    area: string

  @Column()
    bedrooms: number

  @Column()
    bathrooms: number

  @Column()
    floor: number

  @Column()
    juridical: string

  @Column()
    requirement: string

  @Column()
    type: string

}