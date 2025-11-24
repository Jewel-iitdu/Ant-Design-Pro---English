import dayjs from 'dayjs';
import type { Request, Response } from 'express';
import type { DataItem, OfflineDataType } from '../src/pages/dashboard/workplace/data.d';

export type SearchDataType = {
  index: number;
  keyword: string;
  count: number;
  range: number;
  status: number;
};

// mock data
const visitData: DataItem[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2: DataItem[] = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData: DataItem[] = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `Month ${i + 1}`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData: SearchDataType[] = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `Search keyword-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: 'Home appliances',
    y: 4544,
  },
  {
    x: 'Food & beverages',
    y: 3321,
  },
  {
    x: 'Personal care & health',
    y: 3113,
  },
  {
    x: 'Clothing & bags',
    y: 2341,
  },
  {
    x: 'Mother & baby products',
    y: 1231,
  },
  {
    x: 'Other',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: 'Home appliances',
    y: 244,
  },
  {
    x: 'Food & beverages',
    y: 321,
  },
  {
    x: 'Personal care & health',
    y: 311,
  },
  {
    x: 'Clothing & bags',
    y: 41,
  },
  {
    x: 'Mother & baby products',
    y: 121,
  },
  {
    x: 'Other',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: 'Home appliances',
    y: 99,
  },
  {
    x: 'Food & beverages',
    y: 188,
  },
  {
    x: 'Personal care & health',
    y: 344,
  },
  {
    x: 'Clothing & bags',
    y: 255,
  },
  {
    x: 'Other',
    y: 65,
  },
];

const offlineData: OfflineDataType[] = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData: DataItem[] = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

const getNotice = (_: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 'xxx1',
        title: titles[0],
        logo: avatars[0],
        description:
          'It is something internal; they cannot reach it and cannot touch it.',
        updatedAt: new Date(),
        member: 'Science Brick-Moving Team',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx2',
        title: titles[1],
        logo: avatars[1],
        description:
          'Hope is a good thing, maybe the best of things, and no good thing ever dies.',
        updatedAt: new Date('2017-07-24'),
        member: 'The Whole Team Are Movie Stars',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx3',
        title: titles[2],
        logo: avatars[2],
        description:
          'There are so many bars in town, yet she walked into mine.',
        updatedAt: new Date(),
        member: 'Teenage Dream Team',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx4',
        title: titles[3],
        logo: avatars[3],
        description:
          'At that time I only thought about what I wanted, never about what I already had.',
        updatedAt: new Date('2017-07-23'),
        member: 'Programmer Daily Life',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx5',
        title: titles[4],
        logo: avatars[4],
        description: 'Winter is coming.',
        updatedAt: new Date('2017-07-23'),
        member: 'High-end Design Squad',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx6',
        title: titles[5],
        logo: avatars[5],
        description: 'Life is like a box of chocolates; you never know what you’re gonna get.',
        updatedAt: new Date('2017-07-23'),
        member: 'Tricked You Into Learning CS',
        href: '',
        memberLink: '',
      },
    ],
  });
};

const getActivities = (_: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 'trend-1',
        updatedAt: new Date(),
        user: {
          name: 'Lily Qu',
          avatar: avatars2[0],
        },
        group: {
          name: 'High-end Design Squad',
          link: 'http://github.com/',
        },
        project: {
          name: 'June Iteration',
          link: 'http://github.com/',
        },
        template: 'Created project @{project} in @{group}',
      },
      {
        id: 'trend-2',
        updatedAt: new Date(),
        user: {
          name: 'Xiaoxiao Fu',
          avatar: avatars2[1],
        },
        group: {
          name: 'High-end Design Squad',
          link: 'http://github.com/',
        },
        project: {
          name: 'June Iteration',
          link: 'http://github.com/',
        },
        template: 'Created project @{project} in @{group}',
      },
      {
        id: 'trend-3',
        updatedAt: new Date(),
        user: {
          name: 'Dongdong Lin',
          avatar: avatars2[2],
        },
        group: {
          name: 'Teenage Dream Team',
          link: 'http://github.com/',
        },
        project: {
          name: 'June Iteration',
          link: 'http://github.com/',
        },
        template: 'Created project @{project} in @{group}',
      },
      {
        id: 'trend-4',
        updatedAt: new Date(),
        user: {
          name: 'Star Zhou',
          avatar: avatars2[4],
        },
        project: {
          name: 'May Daily Iteration',
          link: 'http://github.com/',
        },
        template: 'Updated @{project} to released status',
      },
      {
        id: 'trend-5',
        updatedAt: new Date(),
        user: {
          name: 'Righty Zhu',
          avatar: avatars2[3],
        },
        project: {
          name: 'Engineering Productivity',
          link: 'http://github.com/',
        },
        comment: {
          name: 'Comment',
          link: 'http://github.com/',
        },
        template: 'Posted @{comment} in @{project}',
      },
      {
        id: 'trend-6',
        updatedAt: new Date(),
        user: {
          name: 'Happy Ge',
          avatar: avatars2[5],
        },
        group: {
          name: 'Programmer Daily Life',
          link: 'http://github.com/',
        },
        project: {
          name: 'Brand Iteration',
          link: 'http://github.com/',
        },
        template: 'Created project @{project} in @{group}',
      },
    ],
  });
};

const radarOriginData = [
  {
    name: 'Individual',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: 'Team',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: 'Department',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: any[] = [];
const radarTitleMap = {
  ref: 'Reference',
  koubei: 'Reputation',
  output: 'Output',
  contribute: 'Contribution',
  hot: 'Heat',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key as 'ref'],
        value: item[key as 'ref'],
      });
    }
  });
});

const getChartData = (_: Request, res: Response) => {
  res.json({
    data: {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
      radarData,
    },
  });
};

export default {
  'GET  /api/project/notice': getNotice,
  'GET  /api/activities': getActivities,
  'GET  /api/fake_workplace_chart_data': getChartData,
};
