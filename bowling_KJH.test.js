/**
 * TITLE : 볼링 점수 계산
 * AUTHOR : KJH
 * VERSION : 1.0
 * COMMENT : 우선적으로 결과만 나오도록 작성 해놓음... 소스 정리나 함수화 등의 작업이 필요함.
 *           기본적인 볼링 점수 계산 로직 외에 10프레임 초과 입력 시 오류와 오류 메세지를 반환하는 로직을 넣어봄.
 */

function calculateScore(line) {
  let result = 0;

  let currentFrame = 0;
  let firstRoll = true;
  let rollScore = [];
  let LastFrameRollCount = 2;

  function setRollScore(number) {
	  rollScore.push(number);
  }

  for (i = 0; i < line.length; i++) {
    const roll = line[i];
    const isStrike = roll === "X";
    const isSpare = roll === "/";
    const isNone = roll === "-";
    //const isNumber = (!isStrike&&!isSpare&&!isNone);

    if(isStrike)
    {
      setRollScore(10);
    }
    else if(isSpare)
    {
      setRollScore(10 - parseInt(line[i-1], 10));
    }
    else if(isNone)
    {
      setRollScore(0);
    }
    else //if(isNumber)
    {
      setRollScore(parseInt(roll, 10));
    }
  }
      
  for (i = 0; i < line.length; i++) {
    const roll = line[i];
    const isStrike = roll === "X";
    const isSpare = roll === "/";
    const isNone = roll === "-";
    //const isNumber = (!isStrike&&!isSpare&&!isNone);

    if(firstRoll)
    {
      currentFrame++;
    } 

    if(currentFrame < 10)
    {
      if(isStrike)
      {
        result += rollScore[i] + rollScore[i+1] + rollScore[i+2];
        firstRoll = true;
      }
      else if(isSpare)
      {
        result += rollScore[i] + rollScore[i+1];
        firstRoll = true;//!firstRoll
      }
      else if(isNone)
      {
        result += 0;
        firstRoll = !firstRoll;
      }
      else// if(isNumber)
      {
        result += rollScore[i];
        firstRoll = !firstRoll;
      }
    }
    else if (currentFrame === 10)
    {
      if(firstRoll)//입력된 문자열이 10프레임을 초과 할 경우 오류 처리
      {
        if(rollScore[i] === 10 || rollScore[i] + rollScore[i+1] === 10)
        LastFrameRollCount++;

        if(line.length - i > LastFrameRollCount)
        {
          console.log("입력한 데이터가 10프레임을 초과했습니다.");
          return "over10Frame";
        }
      }
      result += rollScore[i]; // 10프레임에선 spare나 strike로 인한 보너스 점수를 더하지 않는다.
      firstRoll = false;
    }
  }

  return result;
}

test("9-9-9-9-9-9-9-9-9-9-1", () => {
  expect(calculateScore("9-9-9-9-9-9-9-9-9-9-1")).toBe(90);//10프레임 초과 케이스로 오류를 반환 "9-9-9-9-9-9-9-9-9-9-" -> "9-9-9-9-9-9-9-9-9-9-1"
});

test("5/5/5/5/5/5/5/5/5/5/5", () => {
  expect(calculateScore("5/5/5/5/5/5/5/5/5/5/5")).toBe(150);
});

test("XXXXXXXXXXXX", () => {
  expect(calculateScore("XXXXXXXXXXXX")).toBe(300);
});

test("8/9-9/X71X63X63X81", () => {
  expect(calculateScore("8/9-9/X71X63X63X81")).toBe(149);
});

test("X9/7-9/XX8/X9/9/7", () => {
  expect(calculateScore("X9/7-9/XX8/X9/9/7")).toBe(188);
});

test("4-5-8-X181-6/8-9-71", () => {
  expect(calculateScore("4-5-8-X181-6/8-9-71")).toBe(89);
});

test("9/8/72X7/9/X81XX9/", () => {
  expect(calculateScore("9/8/72X7/9/X81XX9/")).toBe(180);
});

test("9-8/9---63814/81X1-", () => {
  expect(calculateScore("9-8/9---63814/81X1-")).toBe(94);
});

test("X-7XXXX9/8/-8X9/", () => {
  expect(calculateScore("X-7XXXX9/8/-8X9/")).toBe(189);
});

test("9/9/XX71728-XXXX9", () => {
  expect(calculateScore("9/9/XX71728-XXXX9")).toBe(198);
});

test("9-X--7-3---6/7-6216", () => {
  expect(calculateScore("9-X--7-3---6/7-6216")).toBe(68);
});
