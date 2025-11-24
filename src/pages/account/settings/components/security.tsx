import { List } from 'antd';
import React from 'react';

type Unpacked<T> = T extends (infer U)[] ? U : T;

const passwordStrength = {
  strong: <span className="strong">Strong</span>,
  medium: <span className="medium">Medium</span>,
  weak: <span className="weak">Weak</span>,
};

const SecurityView: React.FC = () => {
  const getData = () => [
    {
      title: 'Account password',
      description: (
        <>
          Current password strength:
          {passwordStrength.strong}
        </>
      ),
      actions: [<a key="Modify">Modify</a>],
    },
    {
      title: 'Security mobile phone',
      description: `Bound mobile phone: 138****8293`,
      actions: [<a key="Modify">Modify</a>],
    },
    {
      title: 'Security question',
      description:
        'Security question is not set. Security questions can effectively protect account security.',
      actions: [<a key="Set">Set</a>],
    },
    {
      title: 'Backup email',
      description: `Bound email: ant***sign.com`,
      actions: [<a key="Modify">Modify</a>],
    },
    {
      title: 'MFA device',
      description:
        'No MFA device is bound. After binding, you can perform secondary confirmation.',
      actions: [<a key="bind">Bind</a>],
    },
  ];

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

export default SecurityView;
