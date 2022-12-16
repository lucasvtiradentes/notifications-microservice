import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count a recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(notificationsRepository);

    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-id1' }));
    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-id1' }));
    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-id2' }));

    const { count } = await countRecipientNotifications.execute({ recipientId: 'recipient-id1' });
    expect(count).toEqual(2);
  });
});
