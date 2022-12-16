/* eslint-disable prettier/prettier */
import { NotificationsRepository } from '../repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';

interface FindAllNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetAllNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(): Promise<FindAllNotificationResponse> {
    const notifications = await this.notificationsRepository.findAll();
    return { notifications };
  }
}
