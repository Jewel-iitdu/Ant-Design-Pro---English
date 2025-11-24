import { List, Switch } from 'antd';
import React from 'react';

type Unpacked<T> = T extends (infer U)[] ? U : T;

const NotificationView: React.FC = () => {
  const getData = () => {
    const Action = (
      <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />
    );
    return [
      {
        title: 'User messages',
        description: 'Messages from other users will be notified as in-site messages',
        actions: [Action],
      },
      {
        title: 'System messages',
        description: 'System messages will be notified as in-site messages',
        actions: [Action],
      },
      {
        title: 'To-do tasks',
        description: 'To-do tasks will be notified as in-site messages',
        actions: [Action],
      },
    ];
  };

  const data = getData();
  return (
    <List<Unpacked<typeof data>>
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item actions={item.actions}>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  );
};

export default NotificationView;
