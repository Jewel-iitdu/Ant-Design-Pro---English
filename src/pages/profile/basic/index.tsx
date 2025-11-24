import type { ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Badge, Card, Descriptions, Divider } from 'antd';
import type { FC } from 'react';
import React from 'react';
import type { BasicGood, BasicProgress } from './data.d';
import { queryBasicProfile } from './service';
import useStyles from './style.style';

const progressColumns: ProColumns<BasicProgress>[] = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Current progress',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text: React.ReactNode) => {
      if (text === 'success') {
        return <Badge status="success" text="Completed" />;
      }
      return <Badge status="processing" text="In progress" />;
    },
  },
  {
    title: 'Operator ID',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: 'Duration',
    dataIndex: 'cost',
    key: 'cost',
  },
];
const Basic: FC = () => {
  const { styles } = useStyles();
  const { data, loading } = useRequest(() => {
    return queryBasicProfile();
  });
  const { basicGoods, basicProgress } = data || {
    basicGoods: [],
    basicProgress: [],
  };
  let goodsData: typeof basicGoods = [];
  if (basicGoods.length) {
    let num = 0;
    let amount = 0;
    basicGoods.forEach((item) => {
      num += Number(item.num);
      amount += Number(item.amount);
    });
    goodsData = basicGoods.concat({
      id: 'Total',
      num,
      amount,
    });
  }
  const renderContent = (value: any, _: any, index: any) => {
    const obj: {
      children: any;
      props: {
        colSpan?: number;
      };
    } = {
      children: value,
      props: {},
    };
    if (index === basicGoods.length) {
      obj.props.colSpan = 0;
    }
    return obj;
  };
  const goodsColumns: ProColumns<BasicGood>[] = [
    {
      title: 'Product ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: React.ReactNode, _: any, index: number) => {
        if (index < basicGoods.length) {
          return <span>{text}</span>;
        }
        return {
          children: (
            <span
              style={{
                fontWeight: 600,
              }}
            >
              Total
            </span>
          ),
          props: {
            colSpan: 4,
          },
        };
      },
    },
    {
      title: 'Product name',
      dataIndex: 'name',
      key: 'name',
      render: renderContent,
    },
    {
      title: 'Product barcode',
      dataIndex: 'barcode',
      key: 'barcode',
      render: renderContent,
    },
    {
      title: 'Unit price',
      dataIndex: 'price',
      key: 'price',
      align: 'right' as 'left' | 'right' | 'center',
      render: renderContent,
    },
    {
      title: 'Quantity (pcs)',
      dataIndex: 'num',
      key: 'num',
      align: 'right' as 'left' | 'right' | 'center',
      render: (text: React.ReactNode, _: any, index: number) => {
        if (index < basicGoods.length) {
          return text;
        }
        return (
          <span
            style={{
              fontWeight: 600,
            }}
          >
            {text}
          </span>
        );
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right' as 'left' | 'right' | 'center',
      render: (text: React.ReactNode, _: any, index: number) => {
        if (index < basicGoods.length) {
          return text;
        }
        return (
          <span
            style={{
              fontWeight: 600,
            }}
          >
            {text}
          </span>
        );
      },
    },
  ];
  return (
    <PageContainer>
      <Card variant="borderless">
        <Descriptions
          title="Refund application"
          style={{
            marginBottom: 32,
          }}
        >
          <Descriptions.Item label="Pickup order number">1000000000</Descriptions.Item>
          <Descriptions.Item label="Status">Picked up</Descriptions.Item>
          <Descriptions.Item label="Sales order number">1234123421</Descriptions.Item>
          <Descriptions.Item label="Sub-order">3214321432</Descriptions.Item>
        </Descriptions>
        <Divider
          style={{
            marginBottom: 32,
          }}
        />
        <Descriptions
          title="User information"
          style={{
            marginBottom: 32,
          }}
        >
          <Descriptions.Item label="User name">Xiaoxiao Fu</Descriptions.Item>
          <Descriptions.Item label="Phone number">18100000000</Descriptions.Item>
          <Descriptions.Item label="Preferred courier">Cainiao Warehouse</Descriptions.Item>
          <Descriptions.Item label="Pickup address">
            18 Wantang Road, Xihu District, Hangzhou, Zhejiang Province
          </Descriptions.Item>
          <Descriptions.Item label="Remark">None</Descriptions.Item>
        </Descriptions>
        <Divider
          style={{
            marginBottom: 32,
          }}
        />
        <div className={styles.title}>Returned products</div>
        <ProTable
          style={{
            marginBottom: 24,
          }}
          pagination={false}
          search={false}
          loading={loading}
          options={false}
          toolBarRender={false}
          dataSource={goodsData}
          columns={goodsColumns}
          rowKey="id"
        />
        <div className={styles.title}>Return progress</div>
        <ProTable
          style={{
            marginBottom: 16,
          }}
          pagination={false}
          loading={loading}
          search={false}
          options={false}
          toolBarRender={false}
          dataSource={basicProgress}
          columns={progressColumns}
        />
      </Card>
    </PageContainer>
  );
};
export default Basic;
