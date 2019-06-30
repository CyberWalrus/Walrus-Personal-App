import { ActionCreator, ActionType, initialState, reducer } from "./condition";

describe(`Action condition correctly`, (): void => {
  it(`Should return a correct values`, (): void => {
    expect(ActionCreator.changeId(1)).toEqual({
      type: ActionType.SET_ID,
      payload: 1,
    });
  });
});

describe(`Reducer condition correctly`, (): void => {
  it(`Reducer test set values`, (): void => {
    expect(
      reducer(initialState, {
        type: ActionType.SET_ID,
        payload: 1,
      }),
    ).toEqual({
      id: 1,
    });
  });
});
