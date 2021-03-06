import { Controller, Get, Query, Type } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Types } from "./types.entity";
import { TypesService } from "./types.service";

@ApiTags('types')
@Controller('types')
export class TypeController {

    constructor(
        private ts: TypesService
        // private mc: MarquesCategoriesService
    ) {
    }

    @Get()
    findAll(@Query('category') category): Promise<Types[]> {
        return this.ts.findAll(category);
    }
}
