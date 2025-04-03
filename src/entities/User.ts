import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Stock } from "./Stock";
@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    user_id: number;

    @Column({ length: 30 })
    user_name: string;

    @Column({ unique: true, length: 30 })
    user_email: string;

    @Column({ length: 30 })
    user_password: string;
    @CreateDateColumn({ type: "timestamp", precision: 6 })
    userCreatedAt: Date;

    @UpdateDateColumn({ type: "timestamp", precision: 6 })
    userUpdatedAt: Date;
    @OneToMany(() => Stock, (stock: any) => stock.user) // Um usuário pode ter vários stocks
    stock: Stock[];
    constructor(user_id: number, user_name: string, user_email: string, user_password: string, usercreatedAt: Date, userUpdateAt: Date, stock: Stock[]) {
        this.user_id = user_id
        this.user_name = user_name
        this.user_email = user_email
        this.user_password = user_password
        this.userCreatedAt = usercreatedAt
        this.userUpdatedAt = userUpdateAt
        this.stock = stock
    }
}
