import { Injectable } from '@nestjs/common';
import { Couleurs } from 'src/shared/couleurs/couleurs.entity';
import { Marques } from 'src/shared/marques/marques.entity';
import { Types } from 'src/shared/types/types.entity';
import { Connection, Repository } from 'typeorm';
import VoitureCreateDto from './dto/voiture-create.dto';
import VoitureUpdateDto from './dto/voiture-update.dto';
import VoituresDto from './dto/voiture.dto';
import { Voitures } from './voitures.entity';

@Injectable()
export class VoituresService {
  constructor(
    private connection: Connection
  ) {
    
  }

  async create(voitureCreateDto: VoitureCreateDto): Promise<Voitures> {
    const { marqueId, typeId, couleurId, date, observation, email } = voitureCreateDto;
    try {
      // Recherche l'objet couleur correspondant au couleurId posté
      const couleur = await this.connection.getRepository(Couleurs).findOneOrFail(couleurId);
      // Recherche l'objet marque correspondant au marqueId posté
      const marque = await this.connection.getRepository(Marques).findOneOrFail(marqueId);
      // Recherche l'objet type correspondant au typeId posté
      const type = await this.connection.getRepository(Types).findOneOrFail(typeId);
      // Créer l'object à insérer en base de donnée
      const voitureObj = this.connection.getRepository(Voitures).create({
        date,
        observation,
        email,
        couleur,
        marque,
        type,
      });
      // Sauvegarde l'objet en bdd
      return await this.connection.getRepository(Voitures).save(voitureObj);
    } catch(e) {
      console.log(e);
    }
  }

  async update(
    id,
    voitureUpdateDto: VoitureUpdateDto
    ) {
    const { marqueId, typeId, couleurId, date, observation, email } = voitureUpdateDto;

    // Recherche de la voiture à modifier
    const exists = await this.connection.getRepository(Voitures).findOneOrFail(id);
    // Recherche couleur
    const couleur = await this.connection.getRepository(Couleurs).findOneOrFail(couleurId);
    // Recherche l'objet marque correspondant au marqueId posté
    const marque = await this.connection.getRepository(Marques).findOneOrFail(marqueId);
    // Recherche l'objet type correspondant au typeId posté
    const type = await this.connection.getRepository(Types).findOneOrFail(typeId);

    try {
      // Met à jour la voiture en base
      await this.connection.getRepository(Voitures).update(id, {
        date,
        observation,
        email,
        couleur,
        marque,
        type,
      });
    } catch(e) {
      console.log(e);
    }
  }

  async findAll(): Promise<VoituresDto[]> {
    try {
      return await this.connection.getRepository(Voitures).find({
        relations: [
          'marque',
          'couleur',
          'type'
        ]
      });
    } catch(e) {
      console.log(e);
    }
  }

  async findById(id): Promise<VoituresDto> {
    try {
      return await this.connection.getRepository(Voitures).findOneOrFail(id, {
        relations: [
          'marque',
          'couleur',
          'type'
        ]
      });
    } catch(e) {
      console.log(e);
    }
  }

  async remove(id): Promise<void> {
    try {
      const voiture = await this.connection.getRepository(Voitures).findOneOrFail(id);
      await this.connection.getRepository(Voitures).remove(voiture);
    } catch(e) {
      console.log(e);
    }
  }
}
