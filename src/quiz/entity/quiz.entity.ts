import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
@Entity()
export class quiz {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type : 'varchar'})
    title: string;

    @Column({default: '',type:'text'})
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}