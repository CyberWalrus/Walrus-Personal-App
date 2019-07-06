import { arrayMoveKeyValue } from "./array";

const key = `taskId`;

describe(`Test arrayMoveKeyValue`, (): void => {
  it(`Change position solo 1 4`, (): void => {
    expect(
      arrayMoveKeyValue(
        [{taskId: 1}, {taskId: 0}, {taskId: 0}, {taskId: 4}, {taskId: 5}],
        key,
        0,
        1,
      ),
    ).toEqual([
      {taskId: 1},
      {taskId: 4},
      {taskId: 5},
      {taskId: 0},
      {taskId: 0},
    ]);
  });
});
