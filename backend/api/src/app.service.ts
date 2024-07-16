import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.GLOBAL_RABBITMQ_URI],
        queue: process.env.GLOBAL_RABBITMQ_QUEUE,
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  sendMessage(pattern: string, data: any) {
    return this.client.send(pattern, data);
  }
}
