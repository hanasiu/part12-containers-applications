import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Todo from '../Todos/Todo';

// Mock functions for onClickComplete and onClickDelete
const mockOnClickComplete = jest.fn();
const mockOnClickDelete = jest.fn();

const mockTodo = {
  _id: '1',
  text: 'Test todo',
  done: false,
};

test('renders todo correctly', () => {
  render(<Todo onClickComplete={mockOnClickComplete} onClickDelete={mockOnClickDelete} todo={mockTodo} />);

  const todoText = screen.getByText('Test todo');
  expect(todoText).toBeDefined();

  const notDoneButton = screen.getByText('Set as done');
  expect(notDoneButton).toBeDefined();

  fireEvent.click(notDoneButton);
  expect(mockOnClickComplete).toHaveBeenCalledWith(mockTodo);
});

test('renders done todo correctly', () => {
  const doneTodo = { ...mockTodo, done: true };
  render(<Todo onClickComplete={mockOnClickComplete} onClickDelete={mockOnClickDelete} todo={doneTodo} />);

  const doneText = screen.getByText('This todo is done');
  expect(doneText).toBeDefined();

  const doneButton = screen.getByText('Set as undone');
  expect(doneButton).toBeDefined();

  fireEvent.click(doneButton);
  expect(mockOnClickComplete).toHaveBeenCalledWith(doneTodo);
});

test('calls onClickDelete when delete button is clicked', () => {
  render(<Todo onClickComplete={mockOnClickComplete} onClickDelete={mockOnClickDelete} todo={mockTodo} />);

  const deleteButton = screen.getByText('Delete');
  expect(deleteButton).toBeDefined();

  fireEvent.click(deleteButton);
  expect(mockOnClickDelete).toHaveBeenCalledWith(mockTodo);
});
