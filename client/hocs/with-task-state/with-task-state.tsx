import { HandlSortEnd } from "@client/type/component";
import { arrayMoveKeyValue } from "@client/utils/array";
import { getRandomInt } from "@client/utils/math";
import arrayMove from "array-move";
import * as React from "react";
import { ComponentClass, PureComponent, ReactElement, RefObject } from "react";

export interface Time {
  minute: number;
  text: string;
  taskId?: number;
}
const getTimes = (
  timeInterval: number = 60,
  endTime: number = 1440,
): Time[] => {
  const times: Time[] = [];
  for (let i = 0; i <= endTime; i += timeInterval) {
    const minute: number = i % 60;
    const hour: number = (i - minute) / 60;
    const timeString = `${hour.toString().length < 2 ? `0${hour}` : hour}:${
      minute.toString().length < 2 ? `0${minute}` : minute
    }`;
    times.push({minute: i, text: timeString});
  }
  return times;
};

export interface State {
  tasks?: string[];
  times?: Time[];
}
export interface PublicFunction {
  onAddTask?: (key: number) => void;
  onChangeTask?: (key: number, length: number) => void;
  onTaskSortEnd?: ({oldIndex, newIndex}: HandlSortEnd) => void;
  onChangeSizeTask?: (key: number) => void;
}
const withTaskState = (Component: any): ComponentClass => {
  type P = ReturnType<typeof Component>;

  class WithTaskState extends PureComponent<P, State> {
    public constructor(props: P) {
      super(props);
      this.state = {
        tasks: [],
        times: getTimes(240),
      };
      this.handlAddTask = this.handlAddTask.bind(this);
      this.handlChangeTask = this.handlChangeTask.bind(this);
      this.handlSortEnd = this.handlSortEnd.bind(this);
      this.handlChangeSizeTask = this.handlChangeSizeTask.bind(this);
      this._handlChangeTimes = this._handlChangeTimes.bind(this);
    }
    public handlAddTask(key: number): void {
      const tasksNew = this.state.tasks.slice();
      tasksNew.push(getRandomInt(1, 10).toString());
      this.setState(
        {
          tasks: tasksNew,
        },
        () => {
          this._handlChangeTimes(key);
        },
      );
    }
    public handlChangeTask(key: number): void {
      console.log(`test`);
    }

    public handlChangeSizeTask(key: number): void {
      const timesNew = this.state.times.slice();
      timesNew[key + 1].taskId = timesNew[key].taskId;
      this.setState({
        times: timesNew,
      });
    }

    public handlSortEnd({oldIndex, newIndex}: HandlSortEnd): void {
      this.setState({
        times: arrayMoveKeyValue(this.state.times, `taskId`, oldIndex, newIndex),
      });
    }

    public render(): ReactElement {
      return (
        <Component
          {...this.props}
          tasks={this.state.tasks}
          times={this.state.times}
          onAddTask={this.handlAddTask}
          onChangeTask={this.handlChangeTask}
          onTaskSortEnd={this.handlSortEnd}
          onChangeSizeTask={this.handlChangeSizeTask}
        />
      );
    }
    private _handlChangeTimes(id: number): void {
      const timesNew = this.state.times.slice();
      timesNew[id].taskId = this.state.tasks.length - 1;
      this.setState({
        times: timesNew,
      });
    }
  }
  return WithTaskState;
};

export default withTaskState;
