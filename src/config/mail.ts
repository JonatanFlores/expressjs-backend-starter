interface IMailConfig {
  driver: 'ethereal' | 'ses' | 'smtp';
  smtp: {
    host: string;
    port: number;
    encryption: string;
    username: string;
    password: string;
  };
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  smtp: {
    host: process.env.MAIL_HOST || 'smtp.mailgun.org',
    port: process.env.MAIL_PORT || 587,
    encryption: process.env.MAIL_ENCRYPTION,
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
  },
  defaults: {
    from: {
      email: process.env.MAIL_FROM_ADDRESS,
      name: process.env.MAIL_FROM_NAME,
    },
  },
} as IMailConfig;
