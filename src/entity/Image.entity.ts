import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
  @PrimaryGeneratedColumn("uuid")
    id: string
  
  @Column({
    nullable: false
  })
    src: string

  @Column({
    nullable: false,
    type: "uuid"
  })
    appartmentId: string
}