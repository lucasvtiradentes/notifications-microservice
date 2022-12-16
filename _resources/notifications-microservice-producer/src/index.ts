import {Kafka} from 'kafkajs';
import {randomUUID} from 'node:crypto';
import {KAFKA_ENDPOINT, KAFKA_PASSWORD, KAFKA_USERNAME, KAFKA_TOPIC} from './config';

interface MessageContent {
  content: string;
  category: string;
  recipientId: string;
}

async function boostrap() {
  const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: [KAFKA_ENDPOINT],
    sasl: {
      mechanism: 'scram-sha-256',
      username: KAFKA_USERNAME,
      password: KAFKA_PASSWORD,
    },
    ssl: true,
  });

  const producer = kafka.producer();
  await producer.connect();

  const messageToSend: MessageContent = {
    content: 'nova solicitação de amizade',
    category: 'social',
    recipientId: randomUUID(),
  };

  await producer.send({
    topic: KAFKA_TOPIC,
    messages: [
      {
        value: JSON.stringify(messageToSend),
      },
    ],
  });

  await producer.disconnect();
}

boostrap();
