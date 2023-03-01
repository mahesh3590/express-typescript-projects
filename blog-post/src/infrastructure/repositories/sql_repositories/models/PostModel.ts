import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: "post", schema: "blog"})
export class PostModel {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "uuid"})
    userId: string
    
    @Column()
    title: string

    @Column({type: "varchar", length: "MAX"})
    description: string | null

    // Load users in posts

    // Load many comments in posts
}