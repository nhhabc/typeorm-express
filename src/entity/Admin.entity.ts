import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Admin {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        nullable: false
    })
    username: string

    @Column({
        nullable: false
    })
    password: string
    
}
