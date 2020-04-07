
function calculateScore(line) {
  let result = 90;

  for (i = 0; i < line.length; i++) {
    const roll = line[i];
    const isStrike = roll === "X";
    const isSpare = roll === "/";
    const isNone = roll === "-";
  }

  return result;
}

test("9-9-9-9-9-9-9-9-9-9-", () => {
  expect(calculateScore("9-9-9-9-9-9-9-9-9-9-")).toBe(90);
});

test("5/5/5/5/5/5/5/5/5/5/5", () => {
  expect(calculateScore("5/5/5/5/5/5/5/5/5/5/5")).toBe(150);
});

test("XXXXXXXXXXXX", () => {
  expect(calculateScore("XXXXXXXXXXXX")).toBe(300);
});

test("8/9-9/X71X63X63X8", () => {
  expect(calculateScore("8/9-9/X71X63X63X8")).toBe(148);
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
