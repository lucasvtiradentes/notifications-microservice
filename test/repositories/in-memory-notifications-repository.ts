import { Notification } from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notification-repository';

export class InMemoryNotificationsRepository implements NotificationsRepository {
  async findAll(): Promise<Notification[]> {
    const notifications = this.notifications;
    return notifications;
  }
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = this.notifications.filter((item) => item.recipientId === recipientId);
    return notifications;
  }
  async countManyByRecipientId(recipientId: string): Promise<number> {
    const notifications = this.notifications.filter((item) => item.recipientId === recipientId);
    return Number(notifications.length);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find((item) => item.id === notificationId);
    if (!notification) {
      return null;
    }

    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex((item) => item.id === notification.id);

    if (notificationIndex > -1) {
      this.notifications[notificationIndex] = notification;
    }
  }

  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
