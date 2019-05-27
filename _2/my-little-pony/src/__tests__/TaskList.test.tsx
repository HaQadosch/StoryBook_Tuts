import React from 'react';
import ReactDOM from 'react-dom';

import { TaskList } from '../components/TaskList';
import { TTask, TaskState } from '../components/Task';

const defaultTask: TTask = {
  id: '1',
  title: 'Test',
  updatedAt: new Date(2019, 5, 27),
  state: TaskState.INBOX,
};

const defaultTasks: TTask[] = [
  { ...defaultTask, id: '1', title: 'Todo 1' },
  { ...defaultTask, id: '2', title: 'Todo 2' },
  { ...defaultTask, id: '3', title: 'Todo 3' },
  { ...defaultTask, id: '4', title: 'Todo 4' },
  { ...defaultTask, id: '5', title: 'Todo 5' },
  { ...defaultTask, id: '6', title: 'Todo 6' },
];

const withPinnedTask = [
  ...defaultTasks.slice(0, 5),
  { ...defaultTask, id: '6', title: 'Todo 6 (pinned)', state: TaskState.PINNED },
];

export const actions = {
  onPin: () => {},
  onArchive: () => {},
};

const defaultList = () => <TaskList loading={false} tasks={defaultTasks} {...actions} />;
const taskPinnedList = () => <TaskList loading={false} tasks={withPinnedTask} {...actions} />;
const loadingList = () => <TaskList loading={false} tasks={[]} {...actions} />;
const emptyList = () => <TaskList loading={false} tasks={[]} {...actions} />;

test('renders defaultList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(defaultList(), div);
  ReactDOM.unmountComponentAtNode(div);
});
test('renders list with 1 pinned task without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(taskPinnedList(), div);
  ReactDOM.unmountComponentAtNode(div);
});
test('renders loading list without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(loadingList(), div);
  ReactDOM.unmountComponentAtNode(div);
});
test('renders an empty list without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(emptyList(), div);
  ReactDOM.unmountComponentAtNode(div);
});
