import { configure } from '@storybook/react'

// Require as many stories as we need => require('../stories/index.js')
const loadStories = () => {
  const req = require.context('../stories', true, /\.js$/)
  req.keys().forEach(story => req(story))
}

configure(loadStories, module)