import * as React from "react";
import { ComponentClass, PureComponent, ReactElement, RefObject } from "react";

export interface State {
  tasks: string[];
}
export interface PublicFunction {
  onAddTask: () => void;
  onChangeTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const withTaskState = (Component: any): ComponentClass => {
  type P = ReturnType<typeof Component>;

  class WithTaskState extends PureComponent<P, State> {
    public constructor(props: P) {
      super(props);
      this.state = {
        tasks: [`test1`],
      };
      this.handlAddTask = this.handlAddTask.bind(this);
      this.handlChangeTask = this.handlChangeTask.bind(this);
    }
    public handlAddTask(): void {
      const tasksNew = this.state.tasks.slice();
      tasksNew.push(`test`);
      this.setState({
        tasks: tasksNew,
      });
    }
    public handlChangeTask(event: React.ChangeEvent<HTMLInputElement>): void {
      const tasks = this.state.tasks;
    }

    public render(): ReactElement {
      return (
        <Component
          {...this.props}
          tasks={this.state.tasks}
          onAddTask={this.handlAddTask}
          onChangeTask={this.handlChangeTask}
        />
      );
    }
  }
  return WithTaskState;
};

export default withTaskState;
