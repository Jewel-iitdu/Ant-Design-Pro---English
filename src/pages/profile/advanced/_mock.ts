import type { Request, Response } from 'express';

const advancedOperation1 = [
  {
    key: 'op1',
    type: 'Order relationship effective',
    name: 'Lily Qu',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
  {
    key: 'op2',
    type: 'Finance re-check',
    name: 'Xiaoxiao Fu',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Reason for rejection',
  },
  {
    key: 'op3',
    type: 'Department review',
    name: 'Mao Mao Zhou',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
  {
    key: 'op4',
    type: 'Submit order',
    name: 'Dongdong Lin',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: 'Great',
  },
  {
    key: 'op5',
    type: 'Create order',
    name: 'Yaya Han',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const advancedOperation2 = [
  {
    key: 'op1',
    type: 'Order relationship effective',
    name: 'Lily Qu',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

const advancedOperation3 = [
  {
    key: 'op1',
    type: 'Create order',
    name: 'Yaya Han',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

function getProfileAdvancedData(_req: Request, res: Response) {
  const result = {
    data: {
      advancedOperation1,
      advancedOperation2,
      advancedOperation3,
    },
  };
  return res.json(result);
}

export default {
  'GET  /api/profile/advanced': getProfileAdvancedData,
};
