import { configure } from '@storybook/react';

const req = require.context('../src/stories', true, /\.stories\.tsx$/);

function loadStories() {
  require('../src/stories');
  req.keys().forEach(req);
}

configure(loadStories, module);
