import { configure, addDecorator } from '@storybook/react';
import containerDecorator from './decorators/container'

const req = require.context('../src/components', true, /\.stories\.js$/);

addDecorator(containerDecorator)

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);