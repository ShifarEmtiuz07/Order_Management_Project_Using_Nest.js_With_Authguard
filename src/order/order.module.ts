import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Order } from './entities/order.entity';
import { Profile } from 'src/profile/entities/profile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Order,Profile])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {

 
}
