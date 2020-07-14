import React from 'react';
import styled from '@emotion/styled';
import { FRAME_ITEM_WIDTH } from '../constants/frames';
import FrameType from '../types/FrameType';
import FrameHeader from './FrameHeader';

const Wrapper = styled.div`
  width: ${FRAME_ITEM_WIDTH};
  height: ${FRAME_ITEM_WIDTH};

  background-color: #f2c50f;
  float: left;
  border: solid;
  border-width: 1px;
  border-color: #fbecbe;
`;

const FrameHeaderWrapper = styled.div`
  height: 20px;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;
const FrameScoreWrapper = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
`;

interface FrameItemProps {
  frame: FrameType;
}

const FrameItem = ({ frame }: FrameItemProps) => {
  const { score, rolls, isShowScore } = frame;
  return (
    <Wrapper>
      <FrameHeaderWrapper>
        <FrameHeader rolls={rolls} />
      </FrameHeaderWrapper>
      <FrameScoreWrapper>{isShowScore ? score : ''}</FrameScoreWrapper>
    </Wrapper>
  );
};

export default FrameItem;
