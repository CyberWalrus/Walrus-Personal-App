import { ActionCreator, ActionType, initialState, reducer } from "./data";

describe(`Reducer condition correctly`, (): void => {
  it(`Reducer test set values`, (): void => {
    expect(
      reducer(initialState, {
        type: ActionType.SET_USERS,
        payload: [],
      }),
    ).toEqual(initialState);
  });
});
