import { render, screen } from '@testing-library/react';
import Card from './Card';
import ExpenseContext from '../context/ExpenseContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

describe('Card Component', () => {
  test('renders correctly with given context values', () => {
    // Mock context values
    const mockContextValue = {
      todayExpense: 100,
      variation: 20,
    };

    render(
      <I18nextProvider i18n={i18n}>
        <ExpenseContext.Provider value={mockContextValue}>
          <Card />
        </ExpenseContext.Provider>
      </I18nextProvider>
    );

    // Verifica que el título se renderiza correctamente
    expect(screen.getByText(/main.bills/i)).toBeInTheDocument();

    // Verifica que todayExpense se muestra correctamente
    expect(screen.getByText('100 €')).toBeInTheDocument();

    // Verifica que variation se muestra correctamente
    expect(screen.getByText('+20 %')).toBeInTheDocument();

    // Verifica que se renderizan los textos traducidos de "today" y "yesterday"
    expect(screen.getByText(/main.today/i)).toBeInTheDocument();
    expect(screen.getByText(/main.yesterday/i)).toBeInTheDocument();
  });
});

