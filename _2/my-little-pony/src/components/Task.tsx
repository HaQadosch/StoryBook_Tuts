import React from 'react';

export enum TaskState {
  INBOX = 'INBOX',
  PINNED = 'PINNED',
  ARCHIVED = 'ARCHIVED',
}

// const classFromStaskState: (state: TaskState) => string = state => {
//   const states = {
//     INBOX: 'inbox',
//     PINNED: 'pinned',
//     ARCHIVED: 'archived'
//   }
//   return states[state]
// }

export type TTask = {
  id: string;
  title?: string;
  state?: TaskState;
  updatedAt?: Date;
};

interface ITask {
  task: TTask;
  onArchive(id: string): void;
  onPin(id: string): void;
}

export const Task: React.FC<ITask> = ({ task: { id, title, state }, onArchive, onPin }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className='checkbox'>
        <input type='checkbox' name='checked' defaultChecked={state === TaskState.ARCHIVED} disabled={true} />
        <span className='checkbox-custom' onClick={() => onArchive(id)} />
      </label>

      <div className='title'>
        <input type='text' value={title} name={title} readOnly={true} placeholder='input title' aria-label={title} />
      </div>

      <div className='actions' onClick={evt => evt.stopPropagation()}>
        {state !== TaskState.ARCHIVED ? (
          <button onClick={() => onPin(id)}>
            <span className='icon-star' />
          </button>
        ) : null}
      </div>
    </div>
  );
};
