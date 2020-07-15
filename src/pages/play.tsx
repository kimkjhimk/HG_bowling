import React from 'react';
// import styled from '@emotion/styled';
import { Layout } from 'antd';
import { Game } from '../components/Game';

const { Header, Content } = Layout;
const Play = () => {
  // const Wrapper = styled.div``;
  return (
    <Layout>
      <Header>
        <b style={{ color: 'white', fontSize: '2rem' }}>볼링 점수 계산</b>
      </Header>
      <Content style={{ marginTop: 20 }}>
        <Game />
      </Content>
    </Layout>
  );
};

export default Play;
