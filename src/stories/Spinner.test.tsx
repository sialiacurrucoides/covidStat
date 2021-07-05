import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Spinner.stories'; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const {Default} = composeStories(stories);

test('renders default select with default args', () => {
  render(<Default />);
  const spinner = screen.getByRole('progressbar');
  expect(spinner).not.toBeNull();
});