import { ActionCreator, ActionType, initialState, reducer } from "./user";

describe(`Reducer condition correctly`, (): void => {
  it(`Reducer test set values`, (): void => {
    expect(
      reducer(initialState, {
        type: ActionType.SET_AUTHORIZATION,
        payload: false,
      }),
    ).toEqual(initialState);
  });
});
