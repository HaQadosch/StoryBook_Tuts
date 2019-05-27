import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import produce from 'immer';

import { Task, TTask, TaskState } from '../components/Task';

addDecorator(withA11y);

const defaultTask: TTask = {
  id: '1',
  title: 'Test',
  updatedAt: new Date(2019, 5, 27),
};

const setTaskState = (task: TTask) => (state: TaskState) =>
  produce(task, draft => {
    draft.state = state;
  });
const setState = setTaskState(defaultTask);

const actions = {
  onPin: action('PIN'),
  onArchive: action('ARCHIVE'),
};

const inboxTask = () => <Task task={setState(TaskState.INBOX)} {...actions} />;
const pinnedTask = () => <Task task={setState(TaskState.PINNED)} {...actions} />;
const archivedTask = () => <Task task={setState(TaskState.ARCHIVED)} {...actions} />;

storiesOf('Task', module)
  .addParameters({ viewport: { defaultViewport: 'iphonex' } })
  .add('inbox -- default', inboxTask)
  .add('pinned', pinnedTask)
  .add('archived', archivedTask);
