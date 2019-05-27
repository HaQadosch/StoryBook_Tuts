import { configure, addParameters } from '@storybook/react';
import '../src/index.css';

addParameters({
  viewports: {
    defaultViewport: 'iphonex',
  },
});

const req = require.context('../src/stories', true, /\.stories\.tsx$/);

function loadStories() {
  require('../src/stories');
  req.keys().forEach(req);
}

configure(loadStories, module);
