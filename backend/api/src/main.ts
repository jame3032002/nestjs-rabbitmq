import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  if (process.env.GLOBAL_SERVICE === 'publisher') {
    const app = await NestFactory.create(AppModule);

    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.GLOBAL_RABBITMQ_URI],
        queue: process.env.GLOBAL_RABBITMQ_QUEUE,
        queueOptions: {
          durable: false,
        },
      },
    });

    await app.listen(3000);
  } else {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.RMQ,
        options: {
          urls: [process.env.GLOBAL_RABBITMQ_URI],
          queue: process.env.GLOBAL_RABBITMQ_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    );

    await app.listen();
  }
}
bootstrap();
