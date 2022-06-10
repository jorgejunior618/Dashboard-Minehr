import styled from 'styled-components';

export const DashboardWrapper = styled.main`
  padding: 35px 30px;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  width: 100vw;

  header {
    margin-bottom: 45px;

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
    }

    h2 {
      margin-top: 8px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secundaria};
    }
  }
`;

export const GraphicsArea = styled.section`
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 4%;
`;
