import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  @EventPattern('ping')
  async handleHelloEvent(data: Record<string, unknown>) {
    console.log(data, 'ConsumerController', process.env.GLOBAL_SERVICE);
    return 'pong';
  }
}
