import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Card } from 'antd';
import { FRAME_ITEM_WIDTH } from '../constants/frames';
import FrameLine from './FrameLine';
import FrameType from '../types/FrameType';

const HeaderItemWrapper = styled.div`
  width: ${FRAME_ITEM_WIDTH};
  float: left;
  background-color: #eaeaea;
  border: solid;
  border-width: 1px;
  border-color: #cecece;
  text-align: center;
`;

const TOT_FRAME_COUNT = 10;
const DEFAULT_FRAMES: FrameType[] = [];
const TOT_PIN_COUNT = 10;
const DEFAULT_PIN_COUNTS: number[] = [];
for (let i = 1; i <= TOT_FRAME_COUNT; i++) {
  DEFAULT_FRAMES.push({ num: i, rolls: [], score: 0, bonusCount: 0, isShowScore: false });
}

for (let i = 0; i <= TOT_PIN_COUNT; i++) {
  DEFAULT_PIN_COUNTS.push(i);
}

const TOTAL_PIN_COUNT = 10;
const MAX_FRAME_INDEX = 9;

const Game = () => {
  // const [rollPins, setRollPins] = useState<number[]>([]);

  const [frames, setFrames] = useState(DEFAULT_FRAMES);

  const [restPinCounts, setRestPinCounts] = useState<number[]>(DEFAULT_PIN_COUNTS);

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  //
  // const getRandomInt = (min: number, max: number) => {
  //   const min_ = Math.ceil(min);
  //   const max_ = Math.floor(max);
  //   return Math.floor(Math.random() * (max_ - min_)) + min_; // 최대값은 제외, 최소값은 포함
  // };

  // useEffect(() => {
  // }, [rollPins]);

  const settingRestPinCount = (currentFrame: FrameType, pinCount: number) => {
    // 레일에 있는 쓰러뜨릴 수 있는 남은 핀 수를 정해준다.
    const newRestPinCounts = [];
    let targetPinCount = TOTAL_PIN_COUNT - pinCount;
    if (
      currentFrame.rolls.length === 2 ||
      currentFrame.rolls.findIndex((r) => r.letter === 'X') > -1
    ) {
      targetPinCount = 10;
    }

    for (let i = 0; i <= targetPinCount; i++) {
      newRestPinCounts.push(i);
    }
    setRestPinCounts(newRestPinCounts);
  };

  const handleClickRoll = (pinCount: number) => {
    console.log('pinCount>>>>>>', pinCount);
    // 현재 프레임을 가져온다.
    const currentFrame = frames[currentFrameIndex];

    // 굴린 결과
    let roll;
    const beforePinCount = currentFrame.rolls[0]?.pinCount || 0;
    if (pinCount === TOTAL_PIN_COUNT) {
      roll = { pinCount, letter: 'X' };
      currentFrame.bonusCount = 2;
    } else if (beforePinCount + pinCount === TOTAL_PIN_COUNT) {
      roll = { pinCount, letter: '/' };
      currentFrame.bonusCount = 1;
    } else {
      roll = { pinCount, letter: `${pinCount}` };
    }

    currentFrame.rolls.push(roll);

    // 점수 계산
    const beforeScore = currentFrame.score || 0;
    currentFrame.score = beforeScore + pinCount;

    // 보너스 점수 계산
    if (currentFrameIndex > 0) {
      for (let i = 0; i < currentFrameIndex; i++) {
        const beforeFrame = frames[i];
        if (beforeFrame.bonusCount > 0) {
          beforeFrame.score += pinCount;
          beforeFrame.bonusCount--;
        }
      }
    }
    // // 마지막 프레임 점수 계산
    // if (currentFrameIndex === 9) {
    //   if (currentFrame.bonusCount > 0) {
    //     currentFrame.score += pinCount;
    //     currentFrame.bonusCount--;
    //   }
    // }

    currentFrame.isShowScore = true;

    // 다음 프레임으로 옮길지 여부 결정.
    if (currentFrameIndex === 9) {
      console.log('finalFrame', currentFrameIndex);
      // 마지막 프레임인 경우 다른 처리
      // 보너스가 있으면 3라운드,
      // 없으면 2라운드가 마지막 게임종료
      if (currentFrame.bonusCount > 0) {
        if (currentFrame.rolls.length > 3) {
          alert('게임 종료');
          return;
        }
      } else if (currentFrame.rolls.length > 2) {
        alert('게임 종료');
        return;
      }
    } else {
      const totalDownPinCount = currentFrame.rolls
        .map((r) => r.pinCount)
        .reduce((acc, c) => {
          return acc + c;
        });

      if (currentFrame.rolls.length === 2 || totalDownPinCount === TOTAL_PIN_COUNT) {
        // if (currentFrameIndex !== 9 && currentFrame.rolls.length === 2) {
        const nextFrameIndex = currentFrameIndex + 1;
        if (nextFrameIndex > MAX_FRAME_INDEX) {
          return;
        }
        setCurrentFrameIndex(nextFrameIndex);
      }
    }

    setFrames([...frames]);

    settingRestPinCount(currentFrame, pinCount);
  };

  const GameWrapper = styled.div`
    min-width: 600px;
  `;

  return (
    <GameWrapper>
      {frames.map((item) => (
        <HeaderItemWrapper key={item.num}>{item.num}</HeaderItemWrapper>
      ))}
      <div style={{ clear: 'both' }} />
      <FrameLine frames={frames} />
      <div style={{ clear: 'both' }} />

      <Card title="쓰러뜨릴 핀 갯수 선택" style={{ marginTop: 30 }}>
        {restPinCounts.map((count) => (
          <Button onClick={() => handleClickRoll(count)}>{count}</Button>
        ))}
      </Card>
    </GameWrapper>
  );
};

export { Game };
