import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Request,
  Res,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //@UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signIn(createAuthDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('refToken')
  create_ref_token(@Req() req: Request, @Res() res: Response) {
    return this.authService.create_refToken(req,res);
  }


  
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}