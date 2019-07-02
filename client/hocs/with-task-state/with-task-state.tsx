import * as React from "react";
import { ComponentClass, PureComponent, ReactElement, RefObject } from "react";

interface State {
  tasks: string[];
}

const withTaskState = (Component: any): ComponentClass => {
  type P = ReturnType<typeof Component>;

  class WithTaskState extends PureComponent<P, State> {
    public constructor(props: P) {
      super(props);
      this.state = {
        tasks: [],
      };
      this.handlAddTask = this.handlAddTask.bind(this);
      this.handlChangeTask = this.handlChangeTask.bind(this);
    }
    public handlAddTask(): void {
      const tasks = this.state.tasks;
      tasks.push(``);
      this.setState({
        tasks,
      });
    }
    public handlChangeTask(event: React.ChangeEvent<HTMLInputElement>): void {
      const tasks = this.state.tasks;
    }

    public render(): ReactElement {
      return (
        <Component
          {...this.props}
          tasks={this.props.tasks}
          onAddTask={this.handlAddTask}
          onChangeTask={this.handlChangeTask}
        />
      );
    }
  }
  return WithTaskState;
};

export default withTaskState;
