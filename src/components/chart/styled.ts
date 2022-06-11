import styled from 'styled-components';

export const ChartWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.cardColor};
  padding: 10px 8px;
  border-radius: 10px;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.shadowColor};
`;
