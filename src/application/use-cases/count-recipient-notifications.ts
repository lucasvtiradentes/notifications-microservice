/* eslint-disable prettier/prettier */
import { NotificationsRepository } from '../repositories/notification-repository';
import { Injectable } from '@nestjs/common';

interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;
    const count = await this.notificationsRepository.countManyByRecipientId(recipientId);
    return {
      count,
    };
  }
}
