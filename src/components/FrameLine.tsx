import React from 'react';
import styled from '@emotion/styled';
import FrameItem from './FrameItem';
import FrameType from '../types/FrameType';
import { FRAME_ITEM_WIDTH } from '../constants/frames';

const Wrapper = styled.div``;

const ScoreSummary = styled.div`
  padding-top: 20px;
  padding-left: 7px;
  width: 100px;
  height: ${FRAME_ITEM_WIDTH};

  background-color: #f2c50f;
  float: left;
  border: solid;
  border-width: 1px;
  border-color: #fbecbe;

  text-align: left;
  font-size: 18px;
  font-weight: bolder;
`;

interface FrameLineProps {
  frames: FrameType[];
}

const FrameLine = ({ frames }: FrameLineProps) => {
  console.log(frames);
  const totalScore = frames
    .map((f) => f.score)
    .reduce((acc, currentVal) => {
      return (acc || 0) + (currentVal || 0);
    });
  return (
    <Wrapper>
      {frames.map((frame) => {
        return <FrameItem key={frame.num} frame={frame} />;
      })}
      <ScoreSummary>{totalScore}</ScoreSummary>
    </Wrapper>
  );
};

export default FrameLine;
