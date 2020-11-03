import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { MarquesCategories } from 'src/shared/marques/marques-categories.entity';
import { MarquesCategoriesService } from 'src/shared/marques/marques-categories.service';
import VoitureCreateDto from './dto/voiture-create.dto';
import VoitureUpdateDto from './dto/voiture-update.dto';
import VoituresDto from './dto/voiture.dto';
import { Voitures } from './voitures.entity';
import { VoituresService } from './voitures.service';

@ApiTags('voitures')
@Controller('voitures')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class VoituresController {

    constructor(
        private vs: VoituresService,
        private mc: MarquesCategoriesService
    ) {

    }

    // @UseGuards(JwtAuthGuard)
    @Get()
    findAll(): Promise<VoituresDto[]> {
        return this.vs.findAll();
    }

    @Get(':id')
    findById(
        @Param('id') id: string, 
    ): Promise<VoituresDto> {
        return this.vs.findById(id);
    }

    @Get('categories')
    findByCategories(): Promise<MarquesCategories[]> {
        return this.mc.findAll();
    }

    @Post()
    create(
        @Body() voitureCreateDto: VoitureCreateDto
    ): Promise<Voitures> {
        return this.vs.create(voitureCreateDto);
    }

    @Put(':id')
    update(
        @Param('id') id: string, 
        @Body() voitureUpdateDto: VoitureUpdateDto
    ) {
        return this.vs.update(id, voitureUpdateDto);
    }

    @Delete(':id')
    remove(
        @Param('id') id: string
    ) {
        return this.vs.remove(id);
    }
}
