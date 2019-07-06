import { arrayMoveKeyValue } from "./array";

const arrayTests = [
  {taskId: 0},
  {taskId: 0},
  {taskId: 1},
  {taskId: 1},
  {taskId: 3},
  {taskId: 4},
  {taskId: 4},
  {taskId: 5},
];

const arrayTestsSecond = [
  {taskId: 0},
  {taskId: 0},
  {taskId: 1},
  {taskId: 1},
  {taskId: 3},
  {taskId: 4},
  {taskId: 4},
  {taskId: 5},
];
const arrayTestsTherty = [
  {taskId: 1},
  {taskId: 0},
  {taskId: 0},
  {taskId: 4},
  {taskId: 5},
];
const key = `taskId`;

describe(`Test arrayMoveKeyValue`, (): void => {
  it(`Change position 0 2`, (): void => {
    expect(arrayMoveKeyValue(arrayTests, key, 0, 2)).toEqual([
      {taskId: 1},
      {taskId: 1},
      {taskId: 0},
      {taskId: 0},
      {taskId: 3},
      {taskId: 4},
      {taskId: 4},
      {taskId: 5},
    ]);
  });
  it(`Change position double 0 2`, (): void => {
    expect(arrayMoveKeyValue(arrayTestsSecond, key, 0, 2)).toEqual([
      {taskId: 1},
      {taskId: 1},
      {taskId: 0},
      {taskId: 0},
      {taskId: 3},
      {taskId: 4},
      {taskId: 4},
      {taskId: 5},
    ]);
  });

  it(`Change position double 0 2`, (): void => {
    expect(arrayMoveKeyValue(arrayTestsTherty, key, 0, 1)).toEqual([
      {taskId: 0},
      {taskId: 0},
      {taskId: 1},
      {taskId: 4},
      {taskId: 5},
    ]);
  });
  it(`Change position 0 7`, (): void => {
    expect(
      arrayMoveKeyValue(
        [
          {taskId: 0},
          {taskId: 0},
          {taskId: 1},
          {taskId: 2},
          {taskId: 3},
          {taskId: 4},
          {taskId: 4},
          {taskId: 5},
        ],
        key,
        0,
        7,
      ),
    ).toEqual([
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
});
