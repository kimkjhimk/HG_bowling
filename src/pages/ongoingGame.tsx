import React from 'react';
import { Table, Tag, Space } from 'antd';

import Theme from '../components/theme';
import Layout from '../components/Layout';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
];

const ongoingGame = () => (
  <Theme>
    <Layout>
      <div style={{ height: '100px' }} />
      <div style={{ padding: '60px' }}>
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </Layout>
  </Theme>
);

export default ongoingGame;
