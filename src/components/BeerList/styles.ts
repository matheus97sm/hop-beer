import styled from 'styled-components';

export const BeerListMain = styled.main`
  width: 100%;
  display: grid;
  gap: 16px;
`;

export const BeerListWrapper = styled.ul`
  width: 100%;
  display: grid;
  gap: 16px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BeerItem = styled.div`
  width: 100%;
  padding: 32px;
  display: grid;
  align-content: flex-start;
  justify-items: center;

  background-color: #fff;
  border-radius: 8px;
  box-shadow: var(--shadow);

  img {
    max-height: 240px;
    max-width: 200px;
    margin-bottom: 32px;
  }

  h3 {
    margin-bottom: 16px;

    color: var(--orange);
    font-size: 24px;
    text-align: center;
  }

  div {
    margin-bottom: 8px;
    display: flex;
    gap: 32px;

    span {
      color: var(--brown);
      font-size: 18px;
    }
  }

  p {
    color: var(--grey);
  }
`;
