import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SellingApartment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
    type: "longtext"
  })
  description: string;

  @Column({
    nullable: true,
  })
  preview: string;

  @Column({
    nullable: true,
  })
  address: string;

  @Column({
    nullable: false,
  })
  price: string;

  @Column({
    nullable: true,
  })
  area: string;

  @Column({
    nullable: true,
  })
  bedrooms: number;

  @Column({
    nullable: true,
  })
  bathrooms: number;

  @Column({
    nullable: true,
  })
  floor: number;

  @Column({
    nullable: true,
  })
  juridical: string;

  @Column({
    nullable: true,
  })
  requirement: string;

  @Column({
    nullable: true,
  })
  type: string;
}
