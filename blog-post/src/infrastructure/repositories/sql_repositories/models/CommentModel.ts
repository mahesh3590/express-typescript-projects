import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserModel } from "./UserModel";
import { PostModel } from "./PostModel";

@Entity({name: "comment", schema: "blog"})
export class CommentModel {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "uuid"})
    userId: string

    @Column({type: "uuid"})
    postId: string
    
    @Column()
    text: string

    // Load user for a comment
    @OneToOne((type)=> UserModel)
    @JoinColumn({name: "userId", referencedColumnName: "id"})
    user?: UserModel 

    // Load post for a comment
    @OneToOne((type)=> PostModel)
    @JoinColumn({name: "postId", referencedColumnName: "id"})
    post?: PostModel
}