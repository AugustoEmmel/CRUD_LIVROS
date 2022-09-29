import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Autor } from "./Autor";

@Entity('livro')
export class Livro extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @ManyToOne(() => Autor, (autor) => autor.livros, {
        cascade: true
    })
    autor: Autor;

    @Column()
    editora: string;

    @Column()
    sinopse: string;

    @Column({
        type: "numeric"
    })
    paginas: number;
}