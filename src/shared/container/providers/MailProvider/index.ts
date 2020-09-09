import { container } from 'tsyringe';

import mailConfig from '@config/mail';
import IMailProvider from './models/IMailProvider';
import EtherealMailProvider from './implementations/EtherealMailProvider';
import SESMailProvider from './implementations/SESMailProvider';
import SMTPMailProvider from './implementations/SMTPMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
  smtp: container.resolve(SMTPMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
