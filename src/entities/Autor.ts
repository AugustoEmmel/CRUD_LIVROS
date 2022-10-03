import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Livro } from "./Livro";

@Entity('autor')
export class Autor extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({
        type: "numeric"
    })
    idade: number;

    @OneToMany(() => Livro, (livro) => livro.autor, { cascade: false })
    livros: Livro[];
}