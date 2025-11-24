import type { Request, Response } from 'express';
import type { CardListItemDataType } from './data.d';

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

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  'It is something internal; they cannot reach it and cannot touch it.',
  'Hope is a good thing, maybe the best of things, and no good thing ever dies.',
  'Life is like a box of chocolates; you never know what you’re gonna get.',
  'There are so many bars in town, yet she walked into mine.',
  'Back then I only thought about what I wanted, not what I already had.',
];

const user = [
  'Xiaoxiao Fu',
  'Lily Qu',
  'Dongdong Lin',
  'Star Zhou',
  'Jiahao Wu',
  'Righty Zhu',
  'Fish Sauce',
  'Happy Ge',
  'Yiyi Tan',
  'Zhong Ni',
];

function fakeList(count: number): CardListItemDataType[] {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover:
        parseInt(`${i / 4}`, 10) % 2 === 0
          ? covers[i % 4]
          : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3] as
        | 'normal'
        | 'exception'
        | 'active'
        | 'success',
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2 * i).getTime(),
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2 * i).getTime(),
      subDescription: desc[i % 5],
      description:
        'In the development of middle-platform products, different design specifications and implementations often appear, but many similar pages and components can be abstracted into a standard set of specifications.',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        'Paragraph example: Ant Financial design platform ant.design provides a cross-design and development experience solution with minimal effort, seamlessly integrating into the Ant Financial ecosystem.',
      members: [
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: 'Lily Qu',
          id: 'member1',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: 'Lisa Wang',
          id: 'member2',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: 'Nana Dong',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

function getFakeList(req: Request, res: Response) {
  const params = req.query as any;

  const count = Number(params.count) * 1 || 20;

  const result = fakeList(count);
  return res.json({
    data: {
      list: result,
    },
  });
}

export default {
  'GET  /api/card_fake_list': getFakeList,
};
