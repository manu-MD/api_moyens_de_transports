import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class VoitureCreateDto {

    @ApiProperty()
    @IsString()
    readonly marqueId: string;

    @ApiProperty()
    @IsString()
    readonly typeId: string;

    @ApiProperty()
    @IsString()
    readonly couleurId: string;

    @ApiProperty()
    readonly date: Date;

    @ApiProperty()
    @IsString()
    readonly observation: string;

    @ApiProperty()
    @IsString()
    readonly email: string;

    @ApiProperty()
    readonly photo: any;
}
