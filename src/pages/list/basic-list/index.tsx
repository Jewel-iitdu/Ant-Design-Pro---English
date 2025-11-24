import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import {
  Avatar,
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  List,
  Modal,
  Progress,
  Row,
  Segmented,
} from 'antd';
import dayjs from 'dayjs';
import type { FC } from 'react';
import React, { useState } from 'react';
import OperationModal from './components/OperationModal';
import type { BasicListItemDataType } from './data.d';
import {
  addFakeList,
  queryFakeList,
  removeFakeList,
  updateFakeList,
} from './service';
import useStyles from './style.style';

const { Search } = Input;
const Info: FC<{
  title: React.ReactNode;
  value: React.ReactNode;
  bordered?: boolean;
}> = ({ title, value, bordered }) => {
  const { styles } = useStyles();
  return (
    <div className={styles.headerInfo}>
      <span>{title}</span>
      <p>{value}</p>
      {bordered && <em />}
    </div>
  );
};
const ListContent = ({
  data: { owner, createdAt, percent, status },
}: {
  data: BasicListItemDataType;
}) => {
  const { styles } = useStyles();
  return (
    <div>
      <div className={styles.listContentItem}>
        <span>Owner</span>
        <p>{owner}</p>
      </div>
      <div className={styles.listContentItem}>
        <span>Start time</span>
        <p>{dayjs(createdAt).format('YYYY-MM-DD HH:mm')}</p>
      </div>
      <div className={styles.listContentItem}>
        <Progress
          percent={percent}
          status={status}
          size={6}
          style={{
            width: 180,
          }}
        />
      </div>
    </div>
  );
};
export const BasicList: FC = () => {
  const { styles } = useStyles();
  const [done, setDone] = useState<boolean>(false);
  const [open, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<
    Partial<BasicListItemDataType> | undefined
  >(undefined);
  const {
    data: listData,
    loading,
    mutate,
  } = useRequest(() => {
    return queryFakeList({
      count: 50,
    });
  });
  const { run: postRun } = useRequest(
    (method, params) => {
      if (method === 'remove') {
        return removeFakeList(params);
      }
      if (method === 'update') {
        return updateFakeList(params);
      }
      return addFakeList(params);
    },
    {
      manual: true,
      onSuccess: (result) => {
        mutate(result);
      },
    },
  );
  const list = listData?.list || [];
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 5,
    total: list.length,
  };
  const showEditModal = (item: BasicListItemDataType) => {
    setVisible(true);
    setCurrent(item);
  };
  const deleteItem = (id: string) => {
    postRun('remove', {
      id,
    });
  };
  const editAndDelete = (
    key: string | number,
    currentItem: BasicListItemDataType,
  ) => {
    if (key === 'edit') showEditModal(currentItem);
    else if (key === 'delete') {
      Modal.confirm({
        title: 'Delete task',
        content: 'Are you sure you want to delete this task?',
        okText: 'Confirm',
        cancelText: 'Cancel',
        onOk: () => deleteItem(currentItem.id),
      });
    }
  };
  const extraContent = (
    <div>
      <Segmented
        defaultValue="all"
        options={[
          { label: 'All', value: 'all' },
          { label: 'In progress', value: 'progress' },
          { label: 'Waiting', value: 'waiting' },
        ]}
        // Add onChange handler here if needed
      />
      <Search
        className={styles.extraContentSearch}
        placeholder="Please enter"
        onSearch={() => ({})}
        variant="filled"
      />
    </div>
  );

  const renderMoreBtn = (item: BasicListItemDataType) => {
    return (
      <Dropdown
        menu={{
          onClick: ({ key }) => editAndDelete(key, item),
          items: [
            {
              key: 'edit',
              label: 'Edit',
            },
            {
              key: 'delete',
              label: 'Delete',
            },
          ],
        }}
      >
        <a>
          More <DownOutlined />
        </a>
      </Dropdown>
    );
  };

  const handleDone = () => {
    setDone(false);
    setVisible(false);
    setCurrent({});
  };
  const handleSubmit = (values: BasicListItemDataType) => {
    setDone(true);
    const method = values?.id ? 'update' : 'add';
    postRun(method, values);
  };
  return (
    <div>
      <PageContainer>
        <div className={styles.standardList}>
          <Card variant="borderless">
            <Row>
              <Col sm={8} xs={24}>
                <Info title="My tasks" value="8 tasks" bordered />
              </Col>
              <Col sm={8} xs={24}>
                <Info title="Average handling time this week" value="32 minutes" bordered />
              </Col>
              <Col sm={8} xs={24}>
                <Info title="Tasks completed this week" value="24 tasks" />
              </Col>
            </Row>
          </Card>

          <Card
            className={styles.listCard}
            variant="borderless"
            title="Basic list"
            style={{
              marginTop: 24,
            }}
            styles={{
              body: {
                padding: '0 32px 40px 32px',
              },
            }}
            extra={extraContent}
          >
            <List
              size="large"
              rowKey="id"
              loading={loading}
              pagination={paginationProps}
              dataSource={list}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <a
                      key="edit"
                      onClick={(e) => {
                        e.preventDefault();
                        showEditModal(item);
                      }}
                    >
                      Edit
                    </a>,
                    renderMoreBtn(item),
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar src={item.logo} shape="square" size="large" />
                    }
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.subDescription}
                  />
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </PageContainer>
      <Button
        type="dashed"
        onClick={() => {
          setVisible(true);
        }}
        style={{
          width: '100%',
          marginBottom: 8,
        }}
      >
        <PlusOutlined />
        Add
      </Button>
      <OperationModal
        done={done}
        open={open}
        current={current}
        onDone={handleDone}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default BasicList;
