import styled from 'styled-components';

export const ChartWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.cardColor};
  padding: 10px 8px;
  border-radius: 10px;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.shadowColor};
  tspan {
    fill: ${({ theme }) => theme.colors.fontColor};
  }
  .apexcharts-title-text {
    color: ${({ theme }) => theme.colors.primaria};
    fill: ${({ theme }) => theme.colors.primaria};
  }
`;
