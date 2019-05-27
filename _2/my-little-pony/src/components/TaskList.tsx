import React from 'react';
import { Task, TTask, TaskState } from './Task';

interface ITaksList {
  loading: boolean;
  tasks: TTask[];
  onArchive(id: string): void;
  onPin(id: string): void;
}

export const TaskList: React.FC<ITaksList> = ({ loading, tasks, onArchive, onPin }) => {
  const events = { onArchive, onPin };

  const loadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox' />
      <span className='glow-text'>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className='list-items'>
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className='list-items'>
        <div className='wrapper-message'>
          <span className='icon-check' />
          <div className='title-messag'>You have no tasks.</div>
          <div className='subtitle-message'>Sit back and relax</div>
        </div>
      </div>
    );
  }

  // We want the pinned tasks on top.
  const splitFilter = (all: any[]) => (condition: (test: any) => boolean) =>
    all.reduce(([yes, no], cur) => (condition(cur) ? [[...yes, cur], no] : [yes, [...no, cur]]), [[], []]);

  const [pinned, notPinned] = splitFilter(tasks)(({ state }) => state === TaskState.PINNED);

  const tasksInOrder = [...pinned, ...notPinned];

  return (
    <div className='list-items'>
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};
