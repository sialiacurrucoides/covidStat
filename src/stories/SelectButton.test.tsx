import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './SelectButton.stories'; // import all stories from the stories file
// import '@testing-library/jest-dom';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const {Default, Active} = composeStories(stories);

test('renders default button with default args', () => {
  render(<Default />);
  const buttonElement = screen.getByText(
    /infected/i
  );
  expect(buttonElement).not.toBeNull();
});

test('renders active button with default args', () => {
  render(<Active />);
  const buttonElement = screen.getByText(
    /infected/i
  );
  expect(buttonElement).not.toBeNull();
});

test('onclick handler is called', async () => {
  const onClickSpy = jest.fn();
  render(<Default onClick={onClickSpy} />);
  const buttonElement = screen.getByRole('button');
  buttonElement.click();
  expect(onClickSpy).toHaveBeenCalled();
});
