import withTaskState, {
  PublicFunction,
  State,
  Time,
} from "@client/hocs/with-task-state/with-task-state";
import { getLengthSame } from "@client/utils/array";
import * as React from "react";
import { ComponentClass, Fragment, FunctionComponent, ReactElement } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

type PropsHoc = State & PublicFunction;
type Props = PropsHoc;
interface SortableItemProps {
  tasks: string[];
  taskId: number;
  index: number;
  lengthElement: number;
}
const SortableItem = SortableElement(
  ({
    tasks,
    taskId,
    index,
    onAddTask,
    onChangeSizeTask,
    lengthElement,
  }: SortableItemProps & PublicFunction): ReactElement => (
    <div
      className={`time-table__task`}
      style={{gridRowEnd: `span ${lengthElement}`}}
    >
      {taskId !== undefined ? (
        <Fragment>
          {tasks[taskId]}
          <button onClick={(): void => onChangeSizeTask(index - 1 + lengthElement)}>+</button>
        </Fragment>
      ) : (
        <button onClick={(): void => onAddTask(index)}>+</button>
      )}
    </div>
  ),
);
const SortableList = SortableContainer(
  ({times, tasks, onAddTask, onChangeSizeTask}: PropsHoc) => {
    let nextIndex: number = 0;
    let lengthElement: number = 1;
    return (
      <div className={`time-table`}>
        {times &&
          times.map(({text, taskId}: Time, index: number) => {
            let isShow = true;
            if (nextIndex <= index) {
              lengthElement = getLengthSame(times, `taskId`, index);
              nextIndex = index + lengthElement;
              isShow = true;
            } else {
              lengthElement = 1;
              isShow = false;
            }
            return (
              <React.Fragment key={index}>
                <div className={`time-table__time`}>{text}</div>
                {isShow ? (
                  <SortableItem
                    tasks={tasks}
                    taskId={taskId}
                    index={index}
                    lengthElement={lengthElement}
                    onAddTask={onAddTask}
                    onChangeSizeTask={onChangeSizeTask}
                  />
                ) : (
                  <Fragment />
                )}
              </React.Fragment>
            );
          })}
      </div>
    );
  },
);

const PageTime: FunctionComponent<PropsHoc> = ({
  tasks,
  times,
  onAddTask,
  onChangeTask,
  onTaskSortEnd,
  onChangeSizeTask,
}: Props): ReactElement => {
  return (
    <main className={`page-content`}>
      <section>
        <h2>Time</h2>
      </section>
      <SortableList
        times={times}
        tasks={tasks}
        onAddTask={onAddTask}
        onSortEnd={onTaskSortEnd}
        onChangeSizeTask={onChangeSizeTask}
      />
      <section />
    </main>
  );
};

export { PageTime };

export default withTaskState(PageTime) as ComponentClass;
