import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notifications';
import { GetAllNotifications } from '@application/use-cases/get-all-notifications';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from '../../../src/application/use-cases/send-notification';
import { NotificationsController } from '../../../src/infra/http/controllers/notifications.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification, CancelNotification, CountRecipientNotification, GetRecipientNotification, ReadNotification, UnreadNotification, GetAllNotifications]
})
export class HttpModule {}
