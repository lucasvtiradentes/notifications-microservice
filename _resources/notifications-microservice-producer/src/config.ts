import dotenv from 'dotenv';
dotenv.config();

const KAFKA_ENDPOINT = process.env.KAFKA_ENDPOINT ?? '-';
const KAFKA_USERNAME = process.env.KAFKA_USERNAME ?? '-';
const KAFKA_PASSWORD = process.env.KAFKA_PASSWORD ?? '-';
const KAFKA_TOPIC = 'notifications.send-notification';

export {KAFKA_ENDPOINT, KAFKA_USERNAME, KAFKA_PASSWORD, KAFKA_TOPIC};
