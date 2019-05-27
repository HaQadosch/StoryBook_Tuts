import React from 'react';

export type TTask = {
  id: string;
  title: string;
  state: 'INBOX' | 'PINNED' | 'ARCHIVED';
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
      <input type='text' value={title} name={title} id={id} />
    </div>
  );
};
