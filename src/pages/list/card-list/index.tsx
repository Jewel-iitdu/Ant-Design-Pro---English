import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Button, Card, List, Typography } from 'antd';
import type { CardListItemDataType } from './data.d';
import { queryFakeList } from './service';
import useStyles from './style.style';

const { Paragraph } = Typography;
const CardList = () => {
  const { styles } = useStyles();
  const { data, loading } = useRequest(() => {
    return queryFakeList({
      count: 8,
    });
  });
  const list = data?.list || [];
  const content = (
    <div className={styles.pageHeaderContent}>
      <p>
        Paragraph example: Ant Financial design platform ant.design provides a
        cross-design and development experience solution with minimal effort,
        seamlessly integrating into the Ant Financial ecosystem.
      </p>
      <div className={styles.contentLink}>
        <a>
          <img
            alt=""
            src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          />
          Quick start
        </a>
        <a>
          <img
            alt=""
            src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
          />
          Product introduction
        </a>
        <a>
          <img
            alt=""
            src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
          />
          Product documentation
        </a>
      </div>
    </div>
  );
  const extraContent = (
    <div className={styles.extraImg}>
      <img
        alt="This is a title"
        src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
      />
    </div>
  );
  const nullData: Partial<CardListItemDataType> = {};
  return (
    <PageContainer content={content} extraContent={extraContent}>
      <div className={styles.cardList}>
        <List<Partial<CardListItemDataType>>
          rowKey="id"
          loading={loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={[nullData, ...list]}
          renderItem={(item) => {
            if (item?.id) {
              return (
                <List.Item key={item.id}>
                  <Card
                    hoverable
                    className={styles.card}
                    actions={[
                      <a key="option1">Action One</a>,
                      <a key="option2">Action Two</a>,
                    ]}
                  >
                    <Card.Meta
                      avatar={
                        <img
                          alt=""
                          className={styles.cardAvatar}
                          src={item.avatar}
                        />
                      }
                      title={<a>{item.title}</a>}
                      description={
                        <Paragraph
                          className={styles.item}
                          ellipsis={{
                            rows: 3,
                          }}
                        >
                          {item.description}
                        </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
            }
            return (
              <List.Item>
                <Button type="dashed" className={styles.newButton}>
                  <PlusOutlined /> Add new product
                </Button>
              </List.Item>
            );
          }}
        />
      </div>
    </PageContainer>
  );
};
export default CardList;
