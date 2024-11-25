
import { SignOptions } from './../../node_modules/@types/jsonwebtoken/index.d';
import { Injectable, UnauthorizedException, ExecutionContext, HttpException, HttpStatus, Res } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { request } from 'http';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(createAuthDto): Promise<{ access_token: string,refresh_token: string }> {

  
    if (createAuthDto.userName && createAuthDto.userPassword)
    {
      const user = await this.userService.findOneByUserName(createAuthDto.userName);

      if(!user)
        {
          throw new UnauthorizedException("user do not found");
        }
    
  
      //console.log(createAuthDto.userPassword);
      //console.log(user.userPassword);
      // if (user?.userPassword !== createAuthDto.userPassword) {
      //   throw new UnauthorizedException();
      // }
  
      const isPassvalid= await bcrypt.compare(createAuthDto.userPassword, user.userPassword);
      //console.log("isvalid",isPassvalid);
  
      if(!isPassvalid)
      {
        throw new UnauthorizedException("Password invalid");
      }
  
      try{
        const payload = { userName: user.userName };
        return {
          access_token: await this.jwtService.signAsync(payload,  { expiresIn: '1h' },),
          refresh_token: await this.jwtService.signAsync(payload,  { expiresIn: '6h' },),
        };
  
      }catch(error){
        console.error("Error verifying token:", error);
        throw new HttpException('Invalid info', HttpStatus.UNAUTHORIZED);
  
      }
  
    }else{
      throw new UnauthorizedException("Please provide username and password");
    }
   

  
  }



  async create_refToken(req,res): Promise<any> {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    console.log("Authorization header token:", token);
  
    if (!token) {
      console.error("Token is missing");
      throw new HttpException('Token is missing', HttpStatus.UNAUTHORIZED);
    }
  
    let verification ;
    let payload ;
    let newToken ;
  
     try {
      // Verify the existing token
      verification = await this.jwtService.verifyAsync(token, {
        secret: 'nabxxhsbchyasbfhavbsvb',
      });
      console.log("Token verified successfully:", verification);
  
      const { userName } = verification;
      payload = { userName }; // Ensure payload is an object
      console.log("Payload for new token:", payload);
     } catch (error) {
      console.error("Error verifying token:", error);
      throw new HttpException('Token is not valid', HttpStatus.UNAUTHORIZED);
    }
  
    // Generate a new token with the same payload
    try {
       newToken = await this.jwtService.signAsync(payload, { expiresIn: '1h' });
      console.log("New Access Token:", newToken);
      res.send({access_token: newToken});
    } catch (error) {
      console.error("Error signing new token:", error);
      throw new HttpException('Token generation failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
  

 







  }



