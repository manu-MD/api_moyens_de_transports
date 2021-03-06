import { Couleurs } from "src/shared/couleurs/couleurs.entity";
import { Marques } from "src/shared/marques/marques.entity";
import { Types } from "src/shared/types/types.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Motos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cylindree: string;

    @Column({
        type: 'datetime'
    })
    date: Date;
    
    @Column()
    renseignement: string;

    @Column()
    email: string;

    @ManyToOne(
        () => Marques,        
    )
    marque: Marques;

    @ManyToOne(
        () => Types,
    )
    type: Types;

    @ManyToOne(
        () => Couleurs,
    )
    couleur: Couleurs;

}