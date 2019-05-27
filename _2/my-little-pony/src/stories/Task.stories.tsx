import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Task, TTask } from '../components/Task';

const task: TTask = {
  id: '1',
  title: 'Test',
  state: 'INBOX',
  updatedAt: new Date(2019, 5, 27),
};

const actions = {
  onPin: action('PIN'),
  onArchive: action('ARCHIVE'),
};

storiesOf('Task', module).add('default', () => <Task task={task} {...actions} />);
