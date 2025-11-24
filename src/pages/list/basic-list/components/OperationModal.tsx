import {
  ModalForm,
  ProFormDateTimePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import type { FC } from 'react';
import type { BasicListItemDataType } from '../data.d';
import useStyles from '../style.style';

type OperationModalProps = {
  done: boolean;
  open: boolean;
  current: Partial<BasicListItemDataType> | undefined;
  onDone: () => void;
  onSubmit: (values: BasicListItemDataType) => void;
  children?: React.ReactNode;
};
const OperationModal: FC<OperationModalProps> = (props) => {
  const { styles } = useStyles();
  const { done, open, current, onDone, onSubmit, children } = props;
  if (!open) {
    return null;
  }
  return (
    <ModalForm<BasicListItemDataType>
      open={open}
      title={done ? null : `${current ? 'Edit task' : 'Add task'}`}
      className={styles.standardListForm}
      width={640}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={current}
      submitter={{
        render: (_, dom) => (done ? null : dom),
      }}
      trigger={children}
      modalProps={{
        onCancel: () => onDone(),
        destroyOnHidden: true,
        bodyStyle: done
          ? {
              padding: '72px 0',
            }
          : {},
      }}
    >
      {!done ? (
        <>
          <ProFormText
            name="title"
            label="Task name"
            rules={[
              {
                required: true,
                message: 'Please enter a task name',
              },
            ]}
            placeholder="Please enter"
          />
          <ProFormDateTimePicker
            name="createdAt"
            label="Start time"
            rules={[
              {
                required: true,
                message: 'Please select a start time',
              },
            ]}
            fieldProps={{
              style: {
                width: '100%',
              },
            }}
            placeholder="Please select"
          />
          <ProFormSelect
            name="owner"
            label="Owner"
            rules={[
              {
                required: true,
                message: 'Please select an owner',
              },
            ]}
            options={[
              {
                label: 'Xiaoxiao Fu',
                value: 'xiao',
              },
              {
                label: 'Maomao Zhou',
                value: 'mao',
              },
            ]}
            placeholder="Please select an administrator"
          />
          <ProFormTextArea
            name="subDescription"
            label="Product description"
            rules={[
              {
                message: 'Please enter a product description of at least five characters!',
                min: 5,
              },
            ]}
            placeholder="Please enter at least five characters"
          />
        </>
      ) : (
        <Result
          status="success"
          title="Operation successful"
          subTitle="A short series of descriptive information, which can also contain punctuation."
          extra={
            <Button type="primary" onClick={onDone}>
              Got it
            </Button>
          }
          className={styles.formResult}
        />
      )}
    </ModalForm>
  );
};
export default OperationModal;
