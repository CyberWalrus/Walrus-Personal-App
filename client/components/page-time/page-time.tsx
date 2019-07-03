import withTaskState, {
  PublicFunction,
  State,
} from "@client/hocs/with-task-state/with-task-state";
import * as React from "react";
import { ComponentClass, FunctionComponent, ReactElement } from "react";
interface Time {
  minute: number;
  text: string;
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

type PropsHoc = State & PublicFunction;
type Props = PropsHoc;

const PageTime: FunctionComponent<PropsHoc> = ({
  tasks,
  onAddTask,
  onChangeTask,
}: Props): ReactElement => {
  const times = getTimes(60);
  return (
    <main className={`page-content`}>
      <section>
        <h2>Time</h2>
      </section>
      <section>
        <div className={`time-table`}>
          {times &&
            times.map(({minute, text}: Time, index: number) => (
              <React.Fragment key={index}>
                <div className={`time-table__time`}>{text}</div>
              </React.Fragment>
            ))}
          {tasks &&
            tasks.map((task: string, index: number) => (
              <React.Fragment key={index}>
                <div className={`time-table__task`}>{task}</div>
              </React.Fragment>
            ))}
        </div>
        <button onClick={onAddTask}>+</button>
      </section>
    </main>
  );
};

export { PageTime };

export default withTaskState(PageTime) as ComponentClass;
