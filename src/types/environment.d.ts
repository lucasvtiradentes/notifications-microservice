export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KAFKA_ENDPOINT: string;
      KAFKA_USERNAME: string;
      KAFKA_PASSWORD: string;
      DATABASE_URL: string;
      KAFKAJS_NO_PARTITIONER_WARNING: 1;
    }
  }
}
