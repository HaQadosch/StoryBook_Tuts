import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import produce from 'immer';

import { Task, TTask } from '../components/Task';

const baseTask: TTask = {
  id: 'testId',
  title: 'testTitle',
  state: 'INBOX',
};

// Insert the creation date as updatedAt.
const createTask = (base: TTask): TTask =>
  produce(base, draft => {
    draft.updatedAt = new Date();
  });

it('renders without crashing', () => {
  const task = createTask(baseTask);
  const div = document.createElement('div');
  ReactDOM.render(<Task task={task} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Task does its thiny', () => {
  const task = createTask(baseTask);
  const { debug, asFragment } = render(<Task task={task} />);
  expect(asFragment()).toMatchSnapshot();
  debug(asFragment());
});
