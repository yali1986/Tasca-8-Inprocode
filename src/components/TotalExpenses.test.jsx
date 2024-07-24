import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import TotalExpenses from './TotalExpenses';
import ExpenseContext from '../context/ExpenseContext';
import { useTranslation } from 'react-i18next';

// Mock de useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: vi.fn(),
}));

describe('TotalExpenses Component', () => {
  const changeWeekMock = vi.fn();
  const mockContextValue = {
    totalExpenses: 1000,
    changeWeek: changeWeekMock,
    currentWeek: 2,
    graphData: [0, 1, 2, 3, 4],
  };

  beforeEach(() => {
    useTranslation.mockReturnValue({
      t: (key) => key,
    });
  });

  test('renders total expenses and balance correctly', () => {
    const { getByText } = render(
      <ExpenseContext.Provider value={mockContextValue}>
        <TotalExpenses />
      </ExpenseContext.Provider>
    );

    expect(getByText('main.balance')).toBeInTheDocument();
    expect(getByText('1000 €')).toBeInTheDocument();
  });

  test('navigates weeks correctly with arrow buttons', () => {
    const { getByText } = render(
      <ExpenseContext.Provider value={mockContextValue}>
        <TotalExpenses />
      </ExpenseContext.Provider>
    );

    const prevButton = getByText('←');
    const nextButton = getByText('→');

    // Test previous week button
    fireEvent.click(prevButton);
    expect(changeWeekMock).toHaveBeenCalledWith('prev');

    // Test next week button
    fireEvent.click(nextButton);
    expect(changeWeekMock).toHaveBeenCalledWith('next');
  });

  test('disables arrows at the edges', () => {
    const { rerender, getByText } = render(
      <ExpenseContext.Provider value={{ ...mockContextValue, currentWeek: 4 }}>
        <TotalExpenses />
      </ExpenseContext.Provider>
    );

    let nextButton = getByText('→');
    expect(nextButton).toHaveClass('disabled');

    rerender(
      <ExpenseContext.Provider value={{ ...mockContextValue, currentWeek: 0 }}>
        <TotalExpenses />
      </ExpenseContext.Provider>
    );

    let prevButton = getByText('←');
    expect(prevButton).toHaveClass('disabled');
  });
});