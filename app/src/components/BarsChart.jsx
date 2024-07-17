import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const gastos = [23, 56, 20, 36, 80, 40, 110];
const dias = ["dl", "dt", "dc", "dj", "dv", "ds", "dg"];

const getBackgroundColor = (value) => {
  return value > 100 ? "#74B6BE" : "#EB765C";
};

const midata = {
  labels: dias,
  datasets: [
    {
      label: "Gastos",
      data: gastos,
      backgroundColor: gastos.map(getBackgroundColor)
    }
  ]
};

const misoptions = {
  responsive: true,
  animation: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true
    }
  },
  scales: {
    y: {
      min: 0,
      max: 120,
      grid: {
        display: false
      },
      ticks: {
        callback: function (value) {
          return value === 100 ? '100' : (value === 0 ? '0' : '');
        },
        color: '#6c757d' // text-secondary color in Bootstrap
      },
      afterBuildTicks: function (axis) {
        axis.ticks = axis.ticks.filter(tick => tick.value === 100 || tick.value === 0);
      },
      border: {
        display: false // Deshabilita las líneas principales del eje
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#6c757d' // text-secondary color in Bootstrap
      },
      border: {
        display: false // Deshabilita las líneas principales del eje
      }
    }
  }
};

// Custom plugin to draw horizontal lines at y = 100 and x-axis
const drawLinePlugin = {
  id: 'drawLinePlugin',
  beforeDatasetsDraw: (chart) => {
    const yScale = chart.scales.y;
    const xScale = chart.scales.x;
    
    const yValue = 100;
    const yPixel = yScale.getPixelForValue(yValue);
    const xPixel = yScale.getPixelForValue(0); // y-axis pixel at value 0

    const ctx = chart.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([10, 5]);
    
    // Horizontal line at y = 100
    ctx.moveTo(chart.chartArea.left, yPixel);
    ctx.lineTo(chart.chartArea.right, yPixel);
    ctx.strokeStyle = '#6c757d';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Discontinuous line at x-axis
    ctx.moveTo(chart.chartArea.left, xPixel);
    ctx.lineTo(chart.chartArea.right, xPixel);
    ctx.stroke();
    
    ctx.restore();
  }
};

ChartJS.register(drawLinePlugin);

const CustomBar = () => {
  return <Bar data={midata} options={misoptions} />;
};

export default CustomBar;
