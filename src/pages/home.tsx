import React from 'react';
// import { css } from 'styled-components';
// import tw from 'twin.macro';

import { Table, Row, Col, Slider } from 'antd';
import Theme from '../components/theme';
import Layout from '../components/Layout';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const onGoingGameColumns = [
  {
    title: '선수명',
    dataIndex: 'name'
  },
  {
    title: '라인 번호',
    dataIndex: 'line'
  },
  {
    title: '현재 FrameType',
    dataIndex: 'frame'
  },
  {
    title: '현재 Score',
    dataIndex: 'score'
  }
];
const onGoingGameData = [
  {
    key: '1',
    name: '이형재',
    line: 2,
    frame: 5,
    score: 74
  },
  {
    key: '2',
    name: '최성일',
    line: 2,
    frame: 5,
    score: 36
  },
  {
    key: '3',
    name: '김재희',
    line: 4,
    frame: 7,
    score: 65
  },
  {
    key: '4',
    name: '전구현',
    line: 4,
    frame: 7,
    score: 54
  }
];

const MngPlayerColumns = [
  {
    title: 'Date',
    dataIndex: 'date'
  },
  {
    title: '선수명',
    dataIndex: 'name'
  },
  {
    title: 'Score',
    dataIndex: 'score'
  }
];
const MngPlayerData = [
  {
    key: '1',
    date: '2020/06/10',
    name: '임호준',
    score: 180
  },
  {
    key: '2',
    date: '2020/05/18',
    name: '오수정',
    score: 220
  },
  {
    key: '3',
    date: '2020/05/05',
    name: '김성문',
    score: 232
  },
  {
    key: '4',
    date: '2020/04/28',
    name: '이형재',
    score: 145
  }
];

const rankingColumns = [
  {
    title: 'No.',
    dataIndex: 'no'
  },
  {
    title: '선수명',
    dataIndex: 'name'
  },
  {
    title: 'Game',
    dataIndex: 'playedgame'
  }
];
const rankingData = [
  {
    key: '1',
    no: 1,
    name: '김재희',
    playedgame: 13
  },
  {
    key: '2',
    no: 2,
    name: '전구현',
    playedgame: 8
  },
  {
    key: '3',
    no: 3,
    name: '오수정',
    playedgame: 6
  },
  {
    key: '4',
    no: 4,
    name: '임호준',
    playedgame: 5
  },
  {
    key: '5',
    no: 5,
    name: '이형재',
    playedgame: 4
  }
];

const AvrgradeColumns = [
  {
    title: 'No.',
    dataIndex: 'no'
  },
  {
    title: '선수명',
    dataIndex: 'name'
  },
  {
    title: 'Score',
    dataIndex: 'score'
  }
];
const AvrgradeData = [
  {
    key: '1',
    no: 1,
    name: '오수정',
    score: 260
  },
  {
    key: '2',
    no: 2,
    name: '최성일',
    score: 240
  },
  {
    key: '3',
    no: 3,
    name: '임호준',
    score: 226
  },
  {
    key: '4',
    no: 4,
    name: '전구현',
    score: 196
  },
  {
    key: '5',
    no: 5,
    name: '이형재',
    score: 180
  }
];

const Home = () => {
  return (
    <Theme>
      <Layout>
        <div style={{ height: '100px' }} />
        <div style={{ padding: '60px' }}>
          <Row gutter={[48, 48]}>
            <Col span={12}>
              <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>진행중인 경기</h1>
              <Table
                dataSource={onGoingGameData}
                columns={onGoingGameColumns}
                size="small"
                pagination={false}
              />
            </Col>
            <Col span={12}>
              <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>관리대상</h1>
              <Table
                dataSource={MngPlayerData}
                columns={MngPlayerColumns}
                size="small"
                pagination={false}
              />
            </Col>
          </Row>
          <Row gutter={[48, 48]}>
            <Col span={12}>
              <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>활동 순위 TOP 5</h1>
              <Table
                dataSource={rankingData}
                columns={rankingColumns}
                size="small"
                pagination={false}
              />
            </Col>
            <Col span={12}>
              <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>평균 점수 TOP 5</h1>
              <Table
                dataSource={AvrgradeData}
                columns={AvrgradeColumns}
                size="small"
                pagination={false}
              />
            </Col>
          </Row>
        </div>
      </Layout>
    </Theme>
  );
};

export default Home;
