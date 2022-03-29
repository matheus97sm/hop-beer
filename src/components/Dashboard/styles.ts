import styled from 'styled-components';

export const DashboardWrapper = styled.section`
  padding: 64px 0;
  flex-direction: column;
  gap: 32px;

  h1 {
    color: var(--black);
    font-size: 2rem;
    font-weight: 900;
    text-align: center;
  }

  > div {
    display: grid;
    gap: 32px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    > div {
      grid-template-columns: 280px 1fr;
      align-items: flex-start;
    }
  }
`;
