function getPinCountOf(roll) {
  if (roll === 'X') return 10;
  if (roll === '-') return 0;
  if (roll === '/') return 10;

  return Number(roll);
}

function isStrikeFrame(frame) {
  return frame.status === 'strike';
}

function isSpareFrame(frame) {
  return frame.status === 'spare';
}

function getFrames(line) {
  const frames = [];

  let frameValue = [];
  for (let i = 0; i < line.length; i++) {
    const roll = line[i];
    frameValue.push(roll);

    if (frames.length >= 10) {
      // 10프레임 이후 부터는 보너스롤
      frames[frames.length - 1].value.push(roll);
      continue;
    }

    if (roll === 'X') {
      frames.push({ value: ['X'], status: 'strike' });
      frameValue = [];
      continue;
    }

    if (frameValue.length === 2) {
      const status = frameValue[1] === '/' ? 'spare' : 'normal';
      frames.push({ value: [...frameValue], status });
      frameValue = [];
      continue;
    }
  }

  return frames;
}

function getNormalFrameScore(frame) {
  let result = 0;
  if (isSpareFrame(frame)) {
    result = 10;
  } else {
    result += getPinCountOf(frame.value[0]);
    if (frame.value[1]) {
      result += getPinCountOf(frame.value[1]);
    }
  }

  return result;
}

function calculateScore(line) {
  let result = 0;

  const frames = getFrames(line);

  for (let i = 0; i < frames.length; i++) {
    let frameScore = 0;
    if (isStrikeFrame(frames[i])) {
      // 이 번 프레임이 스트라익인 경우에는
      // 다음 두 번 던진 숫자 + 10점이다.
      frameScore = 10;

      if (i === 9) {
        // 마지막 프레임인 경우 보너스 처리
        frameScore += getPinCountOf(frames[i].value[1]);
        if (frames[i].value[2] && frames[i].value[2] === '/') {
          frameScore += getPinCountOf(10 - frames[i].value[1]);
        } else if (frames[i].value[2]) {
          frameScore += getPinCountOf(frames[i].value[2]);
        }
      } else {
        const nextFrame = frames[i + 1];
        if (nextFrame) {
          if (isStrikeFrame(nextFrame)) {
            // 스트라익인 경우 한 프레임에 1롤이다. 2개의 롤을 구해야함.
            frameScore += getPinCountOf(nextFrame.value[0]);
            if (nextFrame.value[1]) {
              frameScore += getPinCountOf(nextFrame.value[1]);
            } else if (frames[i + 2]) {
              frameScore += getPinCountOf(frames[i + 2].value[0]);
            }
          } else {
            // 스트라익이 아니고, 스페어인경우 10점. 아니면 쓰러뜨린 핀의 수를 더한다.
            frameScore += getPinCountOf(nextFrame.value[0]);
            if (nextFrame.value[1] === '/') {
              frameScore += getPinCountOf(10 - nextFrame.value[0]);
            } else if (nextFrame.value[1]) {
              frameScore += getPinCountOf(nextFrame.value[1]);
            }
          }
        }
      }
    } else if (isSpareFrame(frames[i])) {
      if (i === 9) {
        // 마지막 프레임의 경우 보너스합산 계산
        frameScore = 10 + getPinCountOf(frames[i].value[2]);
      } else {
        const nextFrame = frames[i + 1];
        if (nextFrame) {
          frameScore = 10 + getPinCountOf(nextFrame.value[0]);
        }
      }
    } else if (frames[i].status === 'normal') {
      frameScore = getNormalFrameScore(frames[i]);
    }

    result += frameScore;
    console.log(frames[i], frameScore, result);
  }

  return result;
}

test('9-9-9-9-9-9-9-9-9-9-', () => {
  expect(calculateScore('9-9-9-9-9-9-9-9-9-9-')).toBe(90);
});

test('5/5/5/5/5/5/5/5/5/5/5', () => {
  expect(calculateScore('5/5/5/5/5/5/5/5/5/5/5')).toBe(150);
});

test('XXXXXXXXXXXX', () => {
  expect(calculateScore('XXXXXXXXXXXX')).toBe(300);
});

test('8/9-9/X71X63X63X81', () => {
  expect(calculateScore('8/9-9/X71X63X63X81')).toBe(149);
});

test('X9/7-9/XX8/X9/9/7', () => {
  expect(calculateScore('X9/7-9/XX8/X9/9/7')).toBe(188);
});

test('4-5-8-X181-6/8-9-71', () => {
  expect(calculateScore('4-5-8-X181-6/8-9-71')).toBe(89);
});

test('9/8/72X7/9/X81XX9/', () => {
  expect(calculateScore('9/8/72X7/9/X81XX9/')).toBe(180);
});

test('9-8/9---63814/81X1-', () => {
  expect(calculateScore('9-8/9---63814/81X1-')).toBe(94);
});

test('X-7XXXX9/8/-8X9/', () => {
  expect(calculateScore('X-7XXXX9/8/-8X9/')).toBe(189);
});

test('9/9/XX71728-XXXX9', () => {
  expect(calculateScore('9/9/XX71728-XXXX9')).toBe(198);
});

test('9-X--7-3---6/7-6216', () => {
  expect(calculateScore('9-X--7-3---6/7-6216')).toBe(68);
});
