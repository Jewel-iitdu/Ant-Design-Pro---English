import {
  PageContainer,
  ProForm,
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Card, message } from 'antd';
import type { FC } from 'react';
import { fakeSubmitForm } from './service';
import useStyles from './style.style';

const BasicForm: FC<Record<string, any>> = () => {
  const { styles } = useStyles();
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('Submitted successfully');
    },
  });
  const onFinish = async (values: Record<string, any>) => {
    run(values);
  };
  return (
    <PageContainer content="Forms are used to collect or validate information from users. The basic form is common in scenarios with fewer data items.">
      <Card variant="borderless">
        <ProForm
          hideRequiredMark
          style={{
            margin: 'auto',
            marginTop: 8,
            maxWidth: 600,
          }}
          name="basic"
          layout="vertical"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please enter a title',
              },
            ]}
            placeholder="Give the goal a name"
          />
          <ProFormDateRangePicker
            label="Start and end date"
            width="md"
            name="date"
            rules={[
              {
                required: true,
                message: 'Please select a start and end date',
              },
            ]}
            placeholder={['Start date', 'End date']}
          />
          <ProFormTextArea
            label="Goal description"
            width="xl"
            name="goal"
            rules={[
              {
                required: true,
                message: 'Please enter a goal description',
              },
            ]}
            placeholder="Please enter your phased work goal"
          />

          <ProFormTextArea
            label="Measurement criteria"
            name="standard"
            width="xl"
            rules={[
              {
                required: true,
                message: 'Please enter measurement criteria',
              },
            ]}
            placeholder="Please enter measurement criteria"
          />

          <ProFormText
            width="md"
            label={
              <span>
                Customer
                <em className={styles.optional}>(optional)</em>
              </span>
            }
            tooltip="The target audience of the goal"
            name="client"
            placeholder="Describe the customers you serve; for internal customers, you can directly @name/ID"
          />

          <ProFormText
            width="md"
            label={
              <span>
                Reviewers
                <em className={styles.optional}>(optional)</em>
              </span>
            }
            name="invites"
            placeholder="Directly @name/ID, up to 5 people"
          />

          <ProFormDigit
            label={
              <span>
                Weight
                <em className={styles.optional}>(optional)</em>
              </span>
            }
            name="weight"
            placeholder="Please enter"
            min={0}
            max={100}
            width="xs"
            fieldProps={{
              formatter: (value) => `${value || 0}%`,
              parser: (value) => Number(value ? value.replace('%', '') : '0'),
            }}
          />

          <ProFormRadio.Group
            options={[
              {
                value: '1',
                label: 'Public',
              },
              {
                value: '2',
                label: 'Partially public',
              },
              {
                value: '3',
                label: 'Not public',
              },
            ]}
            label="Goal visibility"
            help="Customers and reviewers will be shared by default"
            name="publicType"
          />
          <ProFormDependency name={['publicType']}>
            {({ publicType }) => {
              return (
                <ProFormSelect
                  width="md"
                  name="publicUsers"
                  fieldProps={{
                    style: {
                      margin: '8px 0',
                      display:
                        publicType && publicType === '2' ? 'block' : 'none',
                    },
                  }}
                  options={[
                    {
                      value: '1',
                      label: 'Colleague A',
                    },
                    {
                      value: '2',
                      label: 'Colleague B',
                    },
                    {
                      value: '3',
                      label: 'Colleague C',
                    },
                  ]}
                />
              );
            }}
          </ProFormDependency>
        </ProForm>
      </Card>
    </PageContainer>
  );
};
export default BasicForm;
