import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: "user", schema: "blog"})
export class UserModel {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    firstName: string

    @Column({nullable: true})
    lastName: string | null

    // Load posts for a user

    // Load comments made by a user

}