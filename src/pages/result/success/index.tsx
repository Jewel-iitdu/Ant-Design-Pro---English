import { DingdingOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { Button, Card, Descriptions, Result, Steps } from 'antd';
import useStyles from './index.style';

const { Step } = Steps;

export default () => {
  const { styles } = useStyles();
  const desc1 = (
    <div className={styles.title}>
      <div
        style={{
          margin: '8px 0 4px',
        }}
      >
        <span>Lily Qu</span>
        <DingdingOutlined
          style={{
            marginLeft: 8,
            color: '#00A0E9',
          }}
        />
      </div>
      <div>2016-12-12 12:32</div>
    </div>
  );
  const desc2 = (
    <div
      style={{
        fontSize: 12,
      }}
      className={styles.title}
    >
      <div
        style={{
          margin: '8px 0 4px',
        }}
      >
        <span>Mao Mao Zhou</span>
        <a href="">
          <DingdingOutlined
            style={{
              color: '#00A0E9',
              marginLeft: 8,
            }}
          />
          <span>Remind</span>
        </a>
      </div>
    </div>
  );
  const content = (
    <>
      <Descriptions title="Project name">
        <Descriptions.Item label="Project ID">23421</Descriptions.Item>
        <Descriptions.Item label="Owner">Lily Qu</Descriptions.Item>
        <Descriptions.Item label="Effective time">2016-12-12 ~ 2017-12-12</Descriptions.Item>
      </Descriptions>
      <br />
      <Steps progressDot current={1}>
        <Step
          title={
            <span
              style={{
                fontSize: 14,
              }}
            >
              Create project
            </span>
          }
          description={desc1}
        />
        <Step
          title={
            <span
              style={{
                fontSize: 14,
              }}
            >
              Department review
            </span>
          }
          description={desc2}
        />
        <Step
          title={
            <span
              style={{
                fontSize: 14,
              }}
            >
              Finance review
            </span>
          }
        />
        <Step
          title={
            <span
              style={{
                fontSize: 14,
              }}
            >
              Complete
            </span>
          }
        />
      </Steps>
    </>
  );
  const extra = (
    <>
      <Button type="primary">Back to list</Button>
      <Button>View project</Button>
      <Button>Print</Button>
    </>
  );
  return (
    <GridContent>
      <Card variant="borderless">
        <Result
          status="success"
          title="Submission successful"
          subTitle="The result page is used to provide feedback on the processing results of a series of operations. For simple operations, you can use a global Message prompt. This area can display supplementary information or more complex content such as a document or summary."
          extra={extra}
          style={{
            marginBottom: 16,
          }}
        >
          {content}
        </Result>
      </Card>
    </GridContent>
  );
};
