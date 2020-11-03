import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class UserLoginDto {
    
    @ApiProperty()
    @IsString()
    readonly email: string;
    
    @ApiProperty()
    @IsString()
    readonly password: string;
}
