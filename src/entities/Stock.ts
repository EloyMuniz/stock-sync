import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    Index
} from "typeorm";
import { User } from "./User";

@Entity()
export class Stock {
    @PrimaryGeneratedColumn("uuid")
    stock_id: string; // O tipo correto para UUID é string

    @Column({ length: 50 })
    stock_product_name: string;

    @Column()
    stock_quantity: number;

    @Column({ length: 50 })
    stock_source: string;

    @Column({ length: 50 })
    stock_lot: string; // Lote do produto

    @Column({ type: "date" })
    stock_expiration_date: Date; // Data de validade

    @Column({ type: "date" })
    stock_manufacture_date: Date; // Data de fabricação

    @Column("decimal", { precision: 10, scale: 2 })
    stock_price: number; // Preço unitário

    @Column({ length: 100 })
    stock_supplier: string; // Fornecedor
    @Index()
    @CreateDateColumn({ type: "timestamp", precision: 6 })
    stockCreatedAt: Date;

    @UpdateDateColumn({ type: "timestamp", precision: 6 })
    stockUpdatedAt: Date;

    @ManyToOne(() => User, (user) => user.stock, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user: User;

    constructor(
        stock_id: string,
        stock_product_name: string,
        stock_quantity: number,
        stock_source: string,
        stock_lot: string,
        stock_expiration_date: Date,
        stock_manufacture_date: Date,
        stock_price: number,
        stock_supplier: string,
        stockCreatedAt: Date,
        stockUpdatedAt: Date,
        user: User
    ) {
        this.stock_id = stock_id;
        this.stock_product_name = stock_product_name;
        this.stock_quantity = stock_quantity;
        this.stock_source = stock_source;
        this.stock_lot = stock_lot;
        this.stock_expiration_date = stock_expiration_date;
        this.stock_manufacture_date = stock_manufacture_date;
        this.stock_price = stock_price;
        this.stock_supplier = stock_supplier;
        this.stockCreatedAt = stockCreatedAt;
        this.stockUpdatedAt = stockUpdatedAt;
        this.user = user;
    }
}
