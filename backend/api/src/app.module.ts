import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ConsumerController } from './consumer.controller';

@Module({
  imports: [],
  controllers: [AppController, ConsumerController],
  providers: [AppService],
})
export class AppModule {}
