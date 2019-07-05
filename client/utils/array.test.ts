import { arrayMoveKeyValue } from "./array";

const arrayTests = [
  {taskId: 0},
  {taskId: 0},
  {taskId: 1},
  {taskId: 2},
  {taskId: 3},
  {taskId: 4},
  {taskId: 4},
  {taskId: 5},
];
const key = `taskId`;

describe(`Test arrayMoveKeyValue`, (): void => {
  it(`Change position 0 4`, (): void => {
    expect(arrayMoveKeyValue(arrayTests.slice(0), key, 0, 4)).toEqual([
      {taskId: 1},
      {taskId: 2},
      {taskId: 3},
      {taskId: 0},
      {taskId: 0},
      {taskId: 4},
      {taskId: 4},
      {taskId: 5},
    ]);
  });
  it(`Change position 0 7`, (): void => {
    expect(arrayMoveKeyValue(arrayTests.slice(0), key, 0, 4)).toEqual([
      {taskId: 1},
      {taskId: 2},
      {taskId: 3},
      {taskId: 4},
      {taskId: 4},
      {taskId: 5},
      {taskId: 0},
      {taskId: 0},
    ]);
  });
  it(`Change position 4 0`, (): void => {
    expect(arrayMoveKeyValue(arrayTests.slice(0), key, 2, 0)).toEqual([
      {taskId: 1},
      {taskId: 0},
      {taskId: 0},
      {taskId: 2},
      {taskId: 3},
      {taskId: 4},
      {taskId: 4},
      {taskId: 5},
    ]);
  });
});
