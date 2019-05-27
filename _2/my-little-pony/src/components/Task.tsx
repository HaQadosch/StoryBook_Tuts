import React from 'react';

export enum TaskState {
  INBOX,
  PINNED,
  ARCHIVED,
}

export type TTask = {
  id: string;
  title?: string;
  state?: TaskState;
  updatedAt?: Date;
};

interface ITask {
  task: TTask;
  onArchive?: React.ChangeEventHandler<HTMLSelectElement>;
  onPin?: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Task: React.FC<ITask> = ({ task: { id, title } }) => {
  return (
    <div className='list-item'>
      <input type='text' value={title} name={title} id={id} aria-label={title} />
    </div>
  );
};
