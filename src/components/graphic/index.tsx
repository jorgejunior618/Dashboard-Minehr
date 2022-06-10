import ApexCharts from 'apexcharts';
import ReactApexCharts from 'react-apexcharts'

function Graphic() {
  const series = [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }];
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  }

  return (<>
  <ReactApexCharts type="bar" height={350} series={series} options={options}/>
  </>);
}

export default Graphic;
