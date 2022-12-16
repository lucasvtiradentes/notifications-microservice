import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Notification as PrimaNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt
    };
  }

  static toDomain(raw: PrimaNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        cancelAt: raw.cancelAt,
        createdAt: raw.createdAt
      },
      raw.id
    );
  }
}
