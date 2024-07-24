import { render } from '@testing-library/react';
import { vi } from 'vitest';
import CustomBar from './BarsChart';
import { Bar } from 'react-chartjs-2';

// Mock del componente Bar
vi.mock('react-chartjs-2', () => ({
  Bar: vi.fn(() => null),
}));

describe('CustomBar Component', () => {
  test('renders Bar chart with correct data and options', () => {
    render(<CustomBar />);
    
    // Verifica que el componente Bar se ha llamado con los datos y opciones correctos
    expect(Bar).toHaveBeenCalledWith(
      expect.objectContaining({
        data: {
          labels: ["dl", "dt", "dc", "dj", "dv", "ds", "dg"],
          datasets: [
            {
              label: "Gastos",
              data: [23, 56, 20, 36, 80, 40, 110],
              backgroundColor: [
                "#EB765C", "#EB765C", "#EB765C", "#EB765C", "#EB765C", "#EB765C", "#74B6BE"
              ]
            }
          ]
        },
        options: expect.objectContaining({
          responsive: true,
          animation: true,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
          },
          scales: {
            y: expect.objectContaining({
              min: 0,
              max: 120,
              grid: { display: false },
              ticks: expect.objectContaining({
                callback: expect.any(Function),
                color: '#6c757d'
              }),
              afterBuildTicks: expect.any(Function),
              border: { display: false }
            }),
            x: expect.objectContaining({
              grid: { display: false },
              ticks: { color: '#6c757d' },
              border: { display: false }
            })
          }
        })
      }),
      {}
    );
  });
});

