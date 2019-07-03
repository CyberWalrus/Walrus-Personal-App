import withTaskState, {
  PublicFunction,
  State,
  Time,
} from "@client/hocs/with-task-state/with-task-state";
import * as React from "react";
import { ComponentClass, FunctionComponent, ReactElement } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

type PropsHoc = State & PublicFunction;
type Props = PropsHoc;
interface SortableItemProps {
  tasks: string[];
  taskId: number;
  index: number;
}
const SortableItem = SortableElement(
  ({
    tasks,
    taskId,
    index,
    onAddTask,
  }: SortableItemProps & PublicFunction): ReactElement => (
    <div className={`time-table__task`}>
      {taskId !== undefined ? (
        tasks[taskId]
      ) : (
        <button onClick={(): void => onAddTask(index)}>+</button>
      )}
    </div>
  ),
);
const SortableList = SortableContainer(
  ({ times, tasks, onAddTask }: PropsHoc) => {
    return (
      <div className={`time-table`}>
        {times &&
          times.map(({ text, taskId }: Time, index: number) => (
            <React.Fragment key={index}>
              <div className={`time-table__time`}>{text}</div>
              <SortableItem
                tasks={tasks}
                taskId={taskId}
                index={index}
                onAddTask={onAddTask}
              />
            </React.Fragment>
          ))}
      </div>
    );
  },
);

const PageTime: FunctionComponent<PropsHoc> = ({
  tasks,
  times,
  onAddTask,
  onChangeTask,
}: Props): ReactElement => {
  return (
    <main className={`page-content`}>
      <section>
        <h2>Time</h2>
      </section>
      <SortableList times={times} tasks={tasks} onAddTask={onAddTask} />
      <section />
    </main>
  );
};

export { PageTime };

export default withTaskState(PageTime) as ComponentClass;
