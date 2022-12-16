import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get a recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotification(notificationsRepository);

    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-id1' }));
    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-id1' }));
    await notificationsRepository.create(makeNotification({ recipientId: 'recipient-id2' }));

    const { notifications } = await getRecipientNotification.execute({ recipientId: 'recipient-id1' });
    expect(notifications).toEqual(expect.arrayContaining([expect.objectContaining({ recipientId: 'recipient-id1' }), expect.objectContaining({ recipientId: 'recipient-id1' })]));
  });
});
