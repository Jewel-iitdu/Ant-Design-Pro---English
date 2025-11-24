import {
  AlipayOutlined,
  DingdingOutlined,
  TaobaoOutlined,
} from '@ant-design/icons';
import { List } from 'antd';
import React from 'react';

const BindingView: React.FC = () => {
  const getData = () => [
    {
      title: 'Bind Taobao',
      description: 'No Taobao account is bound currently',
      actions: [<a key="Bind">Bind</a>],
      avatar: <TaobaoOutlined className="taobao" />,
    },
    {
      title: 'Bind Alipay',
      description: 'No Alipay account is bound currently',
      actions: [<a key="Bind">Bind</a>],
      avatar: <AlipayOutlined className="alipay" />,
    },
    {
      title: 'Bind DingTalk',
      description: 'No DingTalk account is bound currently',
      actions: [<a key="Bind">Bind</a>],
      avatar: <DingdingOutlined className="dingding" />,
    },
  ];

  return (
    <List
      itemLayout="horizontal"
      dataSource={getData()}
      renderItem={(item) => (
        <List.Item actions={item.actions}>
          <List.Item.Meta
            avatar={item.avatar}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default BindingView;
