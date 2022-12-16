import { SendNotification } from '@application/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { KAFKA_TOPIC } from 'src/configs';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @EventPattern(KAFKA_TOPIC)
  async handleSendNotification(@Payload() payload: SendNotificationPayload) {
    const { content, category, recipientId } = payload;
    console.log(payload);
    await this.sendNotification.execute({ content, category, recipientId });
  }
}
