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
    times.push({ minute: i, text: timeString });
  }
  return times;
};

export interface State {
  tasks?: string[];
  times?: Time[];
}
export interface PublicFunction {
  onAddTask?: (key: number) => void;
  onChangeTask?: (key: number) => void;
}
const withTaskState = (Component: any): ComponentClass => {
  type P = ReturnType<typeof Component>;

  class WithTaskState extends PureComponent<P, State> {
    public constructor(props: P) {
      super(props);
      this.state = {
        tasks: [`test1`],
        times: getTimes(60),
      };
      this.handlAddTask = this.handlAddTask.bind(this);
      this.handlChangeTask = this.handlChangeTask.bind(this);
      this._handlChangeTimes = this._handlChangeTimes.bind(this);
    }
    public handlAddTask(key: number): void {
      const tasksNew = this.state.tasks.slice();
      tasksNew.push(`test`);
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
      const tasks = this.state.tasks;
    }

    public render(): ReactElement {
      return (
        <Component
          {...this.props}
          tasks={this.state.tasks}
          times={this.state.times}
          onAddTask={this.handlAddTask}
          onChangeTask={this.handlChangeTask}
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
