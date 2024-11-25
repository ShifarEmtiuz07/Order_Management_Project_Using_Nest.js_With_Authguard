//export class CreateAuthDto {}


import { IsNotEmpty, IsString} from 'class-validator';

export class CreateAuthDto {
    
    @IsNotEmpty()
    readonly userName: string;

    @IsString()
    userPassword: string;
  }
  
