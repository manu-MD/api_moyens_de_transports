import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class CamionUpdateDto {
    @ApiProperty()
    @IsString()
    readonly marqueId: string;
  
    @ApiProperty()
    @IsString()
    readonly genre: string;
    
    @ApiProperty()
    @IsString()
    readonly poids: string;
  
    @ApiProperty()
    @IsString()
    readonly date: Date;
    
    @ApiProperty()
    @IsString()
    readonly renseignement: string;
    
    @ApiProperty()
    @IsString()
    readonly email: string;  
}
