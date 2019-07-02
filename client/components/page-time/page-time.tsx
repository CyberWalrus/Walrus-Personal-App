import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
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
    times.push({ minute: i, text: timeString });
  }
  return times;
};

const PageTime: FunctionComponent = (): ReactElement => {
  const times = getTimes(60);
  return (
    <main className={`page-content`}>
      <section>
        <h2>Time</h2>
      </section>
      <section>
        <div className={`time-table`}>
          {times &&
            times.map(({ minute, text }: Time, index: number) => (
              <React.Fragment key={index}>
                <div className={`time-table__text`}>{text}</div>
                <div className={`time-table__task`}>{minute}</div>
              </React.Fragment>
            ))}
        </div>
      </section>
    </main>
  );
};

export default PageTime;
