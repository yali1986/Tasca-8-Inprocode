import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Languages from './Languages';
import { useTranslation } from 'react-i18next';

// Mock de useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: vi.fn(),
}));

describe('Languages Component', () => {
  let changeLanguageMock;

  beforeEach(() => {
    changeLanguageMock = vi.fn();
    useTranslation.mockReturnValue({
      i18n: {
        changeLanguage: changeLanguageMock,
      },
    });
  });

  test('renders language buttons and changes language on click', () => {
    const { getByAltText } = render(<Languages />);

    // Verificar que las imágenes de las banderas están presentes
    const englishFlag = getByAltText('English');
    const spanishFlag = getByAltText('Español');
    const catalanFlag = getByAltText('Català');

    expect(englishFlag).toBeInTheDocument();
    expect(spanishFlag).toBeInTheDocument();
    expect(catalanFlag).toBeInTheDocument();

    // Simular clic en la bandera de inglés
    fireEvent.click(englishFlag);
    expect(changeLanguageMock).toHaveBeenCalledWith('en');

    // Simular clic en la bandera de español
    fireEvent.click(spanishFlag);
    expect(changeLanguageMock).toHaveBeenCalledWith('es');

    // Simular clic en la bandera de catalán
    fireEvent.click(catalanFlag);
    expect(changeLanguageMock).toHaveBeenCalledWith('cat');
  });
});
