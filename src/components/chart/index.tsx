import ReactApexCharts from 'react-apexcharts';
import theme from '../../styles/themes';
import { ChartWrapper } from './styled';

type ChartProps = {
  title?: string;
  data?: number[];
  dataScatter?: {
    name: string;
    data: [number, number][];
  }[];
  dataName?: string;
  categories?: string[];
  chartType?:
    | 'bar'
    | 'line'
    | 'area'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar';
};

function Chart({
  chartType,
  data,
  categories,
  dataName,
  title,
  dataScatter,
}: ChartProps) {
  return (
    <ChartWrapper>
      <ReactApexCharts
        type={chartType}
        height={300}
        series={
          data
            ? [
                {
                  data,
                  name: dataName,
                },
              ]
            : dataScatter
            ? dataScatter
            : []
        }
        options={{
          chart: {
            type: 'bar',
            offsetY: 10,
          },
          plotOptions: {
            bar: {
              borderRadius: 2,
              horizontal: true,
              barHeight: '60px',
            },
          },
          dataLabels: {
            enabled: false,
          },
          title: {
            text: title,
            style: {
              color: theme.colors.primaria,
            },
          },
          xaxis:
            chartType === 'scatter'
              ? {
                  type: 'datetime',
                }
              : {
                  categories,
                },
        }}
      />
    </ChartWrapper>
  );
}

export default Chart;
