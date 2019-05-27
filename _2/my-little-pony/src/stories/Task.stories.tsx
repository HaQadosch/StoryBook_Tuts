import React from 'react';
import { storiesOf } from '@storybook/react';

import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import produce from 'immer';

import { Task, TTask, TaskState } from '../components/Task';

export const defaultTask: TTask = {
  id: '1',
  title: 'Test',
  updatedAt: new Date(2019, 5, 27),
  state: TaskState.INBOX,
};

const setTaskState = (task: TTask) => (state: TaskState) =>
  produce(task, draft => {
    draft.state = state;
  });
const setState = setTaskState(defaultTask);

export const actions = {
  onPin: action('PIN'),
  onArchive: action('ARCHIVE'),
};

export const inboxTask = () => <Task task={setState(TaskState.INBOX)} {...actions} />;
export const pinnedTask = () => <Task task={setState(TaskState.PINNED)} {...actions} />;
export const archivedTask = () => <Task task={setState(TaskState.ARCHIVED)} {...actions} />;

storiesOf('Task', module)
  .addDecorator(withA11y)
  .addParameters({ viewport: { defaultViewport: 'iphonex' } })
  .add('inbox -- default', inboxTask)
  .add('pinned', pinnedTask)
  .add('archived', archivedTask);
