import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import { KAFKA_ENDPOINT, KAFKA_PASSWORD, KAFKA_USERNAME } from 'src/configs';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: [KAFKA_ENDPOINT],
        sasl: {
          mechanism: 'scram-sha-256',
          username: KAFKA_USERNAME,
          password: KAFKA_PASSWORD
        },
        ssl: true
      }
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
