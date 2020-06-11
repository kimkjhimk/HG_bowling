import React from 'react';

import { Table, Row, Col, Select } from 'antd';
import Theme from '../components/theme';
import Layout from '../components/Layout';

const matchColumns = [
  {
    title: 'No.',
    dataIndex: 'no'
  },
  {
    title: 'Date',
    dataIndex: 'date'
  },
  {
    title: '선수명',
    dataIndex: 'name'
  },
  {
    title: '점수',
    dataIndex: 'score'
  },
  {
    title: '라인 번호',
    dataIndex: 'line'
  },
  {
    title: '등락',
    dataIndex: 'fluctuation'
  }
];
const matchData = [
  {
    key: '1',
    no: 1,
    date: '2020/04/03',
    name: '임호준',
    line: 230,
    score: 11,
    fluctuation: '-'
  },
  {
    key: '2',
    no: 2,
    date: '2020/03/29',
    name: '오수정',
    line: 276,
    score: 3,
    fluctuation: '↑'
  },
  {
    key: '3',
    no: 3,
    date: '2020/03/29',
    name: '이형재',
    line: 220,
    score: 3,
    fluctuation: '↓'
  },
  {
    key: '4',
    no: 4,
    date: '2020/03/29',
    name: '전구현',
    line: 266,
    score: 4,
    fluctuation: '↑'
  },
  {
    key: '5',
    no: 5,
    date: '2020/04/03',
    name: '김재희',
    line: 180,
    score: 4,
    fluctuation: '↑'
  },
  {
    key: '6',
    no: 6,
    date: '2020/04/03',
    name: '임호준',
    line: 230,
    score: 11,
    fluctuation: '↑'
  }
];

const matchResult = () => {
  return (
    <Theme>
      <Layout>
        <div style={{ height: '100px' }} />
        <div style={{ padding: '60px' }}>
          <Row gutter={[48, 8]}>
            <Col span={18} pull={6}>
              <Table dataSource={matchData} columns={matchColumns} />
            </Col>
            <Col span={6} push={18}>
              <Select />
            </Col>
          </Row>
        </div>
      </Layout>
    </Theme>
  );
};

export default matchResult;
