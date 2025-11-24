import {
  DingdingOutlined,
  DownOutlined,
  EllipsisOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import {
  GridContent,
  PageContainer,
  RouteContext,
} from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import {
  Badge,
  Button,
  Card,
  Descriptions,
  Divider,
  Dropdown,
  Empty,
  Popover,
  Space,
  Statistic,
  Steps,
  Table,
  Tooltip,
} from 'antd';
import classNames from 'classnames';
import type { FC } from 'react';
import React, { useState } from 'react';
import type { AdvancedProfileData } from './data.d';
import { queryAdvancedProfile } from './service';
import useStyles from './style.style';

const { Step } = Steps;

const action = (
  <RouteContext.Consumer>
    {({ isMobile }) => {
      if (isMobile) {
        return (
          <Dropdown.Button
            type="primary"
            icon={<DownOutlined />}
            menu={{
              items: [
                {
                  key: '1',
                    label: 'Action one',
                },
                {
                  key: '2',
                    label: 'Action two',
                },
                {
                  key: '3',
                    label: 'Action three',
                },
              ],
            }}
            placement="bottomRight"
          >
            Primary action
          </Dropdown.Button>
        );
      }
      return (
        <Space>
          <Space.Compact>
            <Button>Action one</Button>
            <Button>Action two</Button>
            <Dropdown
              menu={{
                items: [
                  {
                    key: '1',
                    label: 'Option one',
                  },
                  {
                    key: '2',
                    label: 'Option two',
                  },
                  {
                    key: '3',
                    label: 'Option three',
                  },
                ],
              }}
              placement="bottomRight"
            >
              <Button>
                <EllipsisOutlined />
              </Button>
            </Dropdown>
          </Space.Compact>
          <Button type="primary">Primary action</Button>
        </Space>
      );
    }}
  </RouteContext.Consumer>
);

const operationTabList = [
  {
    key: 'tab1',
    tab: 'Operation log 1',
  },
  {
    key: 'tab2',
    tab: 'Operation log 2',
  },
  {
    key: 'tab3',
    tab: 'Operation log 3',
  },
];
const columns = [
  {
    title: 'Operation type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Operator',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Execution result',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => {
      if (text === 'agree') {
        return <Badge status="success" text="Approved" />;
      }
      return <Badge status="error" text="Rejected" />;
    },
  },
  {
    title: 'Operation time',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
  {
    title: 'Remark',
    dataIndex: 'memo',
    key: 'memo',
  },
];
type AdvancedState = {
  operationKey: 'tab1' | 'tab2' | 'tab3';
  tabActiveKey: string;
};
const Advanced: FC = () => {
  const { styles } = useStyles();

  const extra = (
    <div className={styles.moreInfo}>
      <Statistic title="Status" value="Pending approval" />
      <Statistic title="Order amount" value={568.08} prefix="¥" />
    </div>
  );
  const description = (
    <RouteContext.Consumer>
      {({ isMobile }) => (
        <Descriptions
          className={styles.headerList}
          size="small"
          column={isMobile ? 1 : 2}
        >
          <Descriptions.Item label="Creator">Lily Qu</Descriptions.Item>
          <Descriptions.Item label="Ordered product">XX Service</Descriptions.Item>
          <Descriptions.Item label="Created at">2017-07-07</Descriptions.Item>
          <Descriptions.Item label="Related document">
            <a href="">12421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Effective date">
            2017-07-07 ~ 2017-08-08
          </Descriptions.Item>
          <Descriptions.Item label="Remark">
            Please confirm within two working days
          </Descriptions.Item>
        </Descriptions>
      )}
    </RouteContext.Consumer>
  );
  const desc1 = (
    <div className={classNames(styles.stepDescription)}>
      Lily Qu
      <DingdingOutlined
        style={{
          marginLeft: 8,
        }}
      />
      <div>2016-12-12 12:32</div>
    </div>
  );
  const desc2 = (
    <div className={styles.stepDescription}>
      Mao Mao Zhou
      <DingdingOutlined
        style={{
          color: '#00A0E9',
          marginLeft: 8,
        }}
      />
      <div>
        <a href="">Remind</a>
      </div>
    </div>
  );

  const [tabStatus, seTabStatus] = useState<AdvancedState>({
    operationKey: 'tab1',
    tabActiveKey: 'detail',
  });

  const customDot = (
    dot: React.ReactNode,
    {
      status,
    }: {
      status: string;
    },
  ) => {
    const popoverContent = (
      <div
        style={{
          width: 160,
        }}
        >
        Plus Wu
        <span
          style={{
            float: 'right',
          }}
        >
          <Badge
            status="default"
            text={
              <span
                style={{
                  color: 'rgba(0, 0, 0, 0.45)',
                }}
              >
                No response
              </span>
            }
          />
        </span>
        <div
          style={{
            marginTop: 4,
          }}
        >
          Duration: 2 hours 25 minutes
        </div>
      </div>
    );
    if (status === 'process') {
      return (
        <Popover
          placement="topLeft"
          arrow={{
            pointAtCenter: true,
          }}
          content={popoverContent}
        >
          <span>{dot}</span>
        </Popover>
      );
    }
    return dot;
  };

  const { data = {}, loading } = useRequest<{
    data: AdvancedProfileData;
  }>(queryAdvancedProfile);
  const { advancedOperation1, advancedOperation2, advancedOperation3 } = data;
  const contentList = {
    tab1: (
      <Table
        pagination={false}
        loading={loading}
        dataSource={advancedOperation1}
        columns={columns}
      />
    ),
    tab2: (
      <Table
        pagination={false}
        loading={loading}
        dataSource={advancedOperation2}
        columns={columns}
      />
    ),
    tab3: (
      <Table
        pagination={false}
        loading={loading}
        dataSource={advancedOperation3}
        columns={columns}
      />
    ),
  };
  const onTabChange = (tabActiveKey: string) => {
    seTabStatus({
      ...tabStatus,
      tabActiveKey,
    });
  };
  const onOperationTabChange = (key: string) => {
    seTabStatus({
      ...tabStatus,
      operationKey: key as 'tab1',
    });
  };
  return (
    <PageContainer
      title="Order No.: 234231029431"
      extra={action}
      className={styles.pageHeader}
      content={description}
      extraContent={extra}
      tabActiveKey={tabStatus.tabActiveKey}
      onTabChange={onTabChange}
      tabList={[
        {
          key: 'detail',
          tab: 'Details',
        },
        {
          key: 'rule',
          tab: 'Rules',
        },
      ]}
    >
      <div className={styles.main}>
        <GridContent>
          <Card
            title="Process progress"
            style={{
              marginBottom: 24,
            }}
          >
            <RouteContext.Consumer>
              {({ isMobile }) => (
                <Steps
                  direction={isMobile ? 'vertical' : 'horizontal'}
                  progressDot={customDot}
                  current={1}
                >
                  <Step title="Create project" description={desc1} />
                  <Step title="Department review" description={desc2} />
                  <Step title="Finance review" />
                  <Step title="Complete" />
                </Steps>
              )}
            </RouteContext.Consumer>
          </Card>
          <Card
            title="User information"
            style={{
              marginBottom: 24,
            }}
            variant="borderless"
          >
            <Descriptions
              style={{
                marginBottom: 24,
              }}
            >
              <Descriptions.Item label="User name">Xiaoxiao Fu</Descriptions.Item>
              <Descriptions.Item label="Membership card number">
                32943898021309809423
              </Descriptions.Item>
              <Descriptions.Item label="ID card">
                3321944288191034921
              </Descriptions.Item>
              <Descriptions.Item label="Contact number">
                18112345678
              </Descriptions.Item>
              <Descriptions.Item label="Contact address">
                Lily Qu 18100000000, Intersection of Huanggu Mountain Road and Gongzhuan
                Road, Xihu District, Hangzhou, Zhejiang Province
              </Descriptions.Item>
            </Descriptions>
            <Descriptions
              style={{
                marginBottom: 24,
              }}
              title="Information group"
            >
              <Descriptions.Item label="Some data">725</Descriptions.Item>
              <Descriptions.Item label="Last updated at">
                2017-08-08
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <span>
                    Some data
                    <Tooltip title="Data description">
                      <InfoCircleOutlined
                        style={{
                          color: 'rgba(0, 0, 0, 0.43)',
                          marginLeft: 4,
                        }}
                      />
                    </Tooltip>
                  </span>
                }
              >
                725
              </Descriptions.Item>
              <Descriptions.Item label="Last updated at">
                2017-08-08
              </Descriptions.Item>
            </Descriptions>
            <h4
              style={{
                marginBottom: 16,
              }}
            >
              Information group
            </h4>
            <Card type="inner" title="Multi-level information group">
              <Descriptions
                style={{
                  marginBottom: 16,
                }}
                title="Group name"
              >
                <Descriptions.Item label="Owner">Dongdong Lin</Descriptions.Item>
                <Descriptions.Item label="Role code">1234567</Descriptions.Item>
                <Descriptions.Item label="Department">
                  XX Company - YY Department
                </Descriptions.Item>
                <Descriptions.Item label="Expiration date">
                  2017-08-08
                </Descriptions.Item>
                <Descriptions.Item label="Description">
                  This description is very long, very long, very long...
                </Descriptions.Item>
              </Descriptions>
              <Divider
                style={{
                  margin: '16px 0',
                }}
              />
              <Descriptions
                style={{
                  marginBottom: 16,
                }}
                title="Group name"
                column={1}
              >
                <Descriptions.Item label="Scientific name">
                  Citrullus lanatus (Thunb.) Matsum. et Nakai is an annual
                  trailing vine; the stems and branches are thick with obvious
                  ridges. Tendrils are relatively thick..
                </Descriptions.Item>
              </Descriptions>
              <Divider
                style={{
                  margin: '16px 0',
                }}
              />
              <Descriptions title="Group name">
                <Descriptions.Item label="Owner">Xiaoxiao Fu</Descriptions.Item>
                <Descriptions.Item label="Role code">1234568</Descriptions.Item>
              </Descriptions>
            </Card>
          </Card>
          <Card
            title="User call records in the last six months"
            style={{
              marginBottom: 24,
            }}
            variant="borderless"
          >
            <Empty />
          </Card>
          <Card
            variant="borderless"
            tabList={operationTabList}
            onTabChange={onOperationTabChange}
          >
            {contentList[tabStatus.operationKey] as React.ReactNode}
          </Card>
        </GridContent>
      </div>
    </PageContainer>
  );
};
export default Advanced;
