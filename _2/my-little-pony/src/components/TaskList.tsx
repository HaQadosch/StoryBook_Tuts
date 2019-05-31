import React, { useState } from 'react';
import { Task, TTask, TaskState } from './Task';

interface ITaskList {
  loading: boolean;
  tasks: TTask[];
  onArchive(task: TTask): void;
  onPin(task: TTask): void;
}

// We want the pinned tasks on top.
type YesNoTTasks = [TTask[], TTask[]];
type condition = (cur: TTask) => boolean;

type TasksSplit = (condition: condition) => (all: TTask[]) => YesNoTTasks;
const splitFilter: TasksSplit = condition => {
  type TTasksYesNoReducer = (prev: YesNoTTasks, cur: TTask) => YesNoTTasks;
  type SortTask = (condition: condition) => TTasksYesNoReducer;
  const sortTask: SortTask = condition => ([yes, no], cur) =>
    condition(cur) ? [[...yes, cur], no] : [yes, [...no, cur]];

  return all => all.reduce(sortTask(condition), [[], []]);
};

const splitByPinned = splitFilter(({ state }) => state === TaskState.PINNED);
const pinnedOnTop: (tasks: TTask[]) => TTask[] = tasks => {
  const [pinned, notPinned] = splitByPinned(tasks);
  return [...pinned, ...notPinned];
};

export const TaskList: React.FC<ITaskList> = ({ loading, tasks, onArchive: archive, onPin: pin }) => {
  const [tasksInOrder, setTasksInOrder] = useState(pinnedOnTop(tasks));

  const events = {
    onArchive: (archivedTask: TTask) => {
      setTasksInOrder(pinnedOnTop(tasksInOrder.map(task => (task.id === archivedTask.id ? archivedTask : task))));
      archive(archivedTask);
    },
    onPin: (toggledTask: TTask) => {
      setTasksInOrder(pinnedOnTop(tasksInOrder.map(task => (task.id === toggledTask.id ? toggledTask : task))));
      pin(toggledTask);
    },
  };

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

  return (
    <div className='list-items' data-testid='list-items'>
      {tasksInOrder.map(task =>
        task.state !== TaskState.ARCHIVED ? <Task key={task.id} task={task} {...events} /> : null,
      )}
    </div>
  );
};
