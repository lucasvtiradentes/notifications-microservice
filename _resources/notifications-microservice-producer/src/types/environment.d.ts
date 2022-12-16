export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KAFKA_ENDPOINT: string;
      KAFKA_USERNAME: string;
      KAFKA_PASSWORD: string;
      KAFKAJS_NO_PARTITIONER_WARNING: 1;
    }
  }
}
