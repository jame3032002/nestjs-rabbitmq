import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getPing() {
    return this.appService.sendMessage('ping', { msg: 'Ping' });
  }
}
