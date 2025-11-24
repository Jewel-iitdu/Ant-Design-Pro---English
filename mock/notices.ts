import type { Request, Response } from 'express';

const getNotices = (_req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: '000000001',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/MSbDR4FR2MUAAAAAAAAAAAAAFl94AQBr',
        title: 'You have received 14 new weekly reports',
        datetime: '2017-08-09',
        type: 'notification',
      },
      {
        id: '000000002',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/hX-PTavYIq4AAAAAAAAAAAAAFl94AQBr',
        title: 'Your referral Nini Qu has passed the third-round interview',
        datetime: '2017-08-08',
        type: 'notification',
      },
      {
        id: '000000003',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/jHX5R5l3QjQAAAAAAAAAAAAAFl94AQBr',
        title: 'This template can distinguish different types of notifications',
        datetime: '2017-08-07',
        read: true,
        type: 'notification',
      },
      {
        id: '000000004',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/Wr4mQqx6jfwAAAAAAAAAAAAAFl94AQBr',
        title: 'The left icon is used to distinguish different types',
        datetime: '2017-08-07',
        type: 'notification',
      },
      {
        id: '000000005',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/Mzj_TbcWUj4AAAAAAAAAAAAAFl94AQBr',
        title: 'Content should not exceed two lines; it will be truncated automatically',
        datetime: '2017-08-07',
        type: 'notification',
      },
      {
        id: '000000006',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/eXLzRbPqQE4AAAAAAAAAAAAAFl94AQBr',
        title: 'Lily Qu commented on you',
        description: 'Description information description information description',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000007',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/w5mRQY2AmEEAAAAAAAAAAAAAFl94AQBr',
        title: 'Righty Zhu replied to you',
        description:
          'This template is used to remind you who interacted with you, with their avatar on the left.',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000008',
        avatar:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/wPadR5M9918AAAAAAAAAAAAAFl94AQBr',
        title: 'Title',
        description:
          'This template is used to remind you who interacted with you, with their avatar on the left.',
        datetime: '2017-08-07',
        type: 'message',
        clickClose: true,
      },
      {
        id: '000000009',
        title: 'Task name',
        description: 'The task needs to be started before 2017-01-12 20:00',
        extra: 'Not started',
        status: 'todo',
        type: 'event',
      },
      {
        id: '000000010',
        title: 'Third-party emergency code change',
        description:
          'Submitted by Guanlin on 2017-01-06, the code change task must be completed before 2017-01-07',
        extra: 'About to expire',
        status: 'urgent',
        type: 'event',
      },
      {
        id: '000000011',
        title: 'Information security exam',
        description: 'Assigned to Zhuer to complete updates and release before 2017-01-09',
        extra: '8 days spent',
        status: 'doing',
        type: 'event',
      },
      {
        id: '000000012',
        title: 'ABCD version release',
        description:
          'Submitted by Guanlin on 2017-01-06, the code change task must be completed before 2017-01-07',
        extra: 'In progress',
        status: 'processing',
        type: 'event',
      },
    ],
  });
};

export default {
  'GET /api/notices': getNotices,
};
