

import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../Components/Todo/TodoItem'; 

describe('TodoItem', () => {
  const mockRemoveTodo = jest.fn();
  const todo = { id: 1, title: 'Test Todo' };

  beforeEach(() => {
    render(<TodoItem todo={todo} removeTodo={mockRemoveTodo} />);
  });

  it('renders the todo item title', () => {
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('calls removeTodo when delete button is clicked', () => {
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    expect(mockRemoveTodo).toHaveBeenCalledWith(todo.id);
  });
});
